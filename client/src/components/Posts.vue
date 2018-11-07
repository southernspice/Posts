<template>
  <div class="posts">
    <button id = 'filterEvenId' v-on:click="filterByEvenId()">Filter by even PostID</button>
    <button id = 'filterOddId' v-on:click="filterByOddId()">Filter by odd PostID</button>
    <button id = 'getAllPosts' v-on:click="getPosts()">Get all posts back</button>
    <div id = 'filterDescription'></div>

    <h1>Posts</h1>
    This app will list all the posts from https://jsonplaceholder.typicode.com/posts
    <div v-for="post in posts" :key = "post.id">
      <p>
        <div id = 'postContainer'>
          <img id = 'user' src="../assets/user.png">
          <br>
          <span id = 'userID'><b>UserID:</b> {{post.userId}}</span>
          <br>
          <span id = 'title'><b>Title:</b> {{post.title}}</span>
          <br>
          <span id = 'post'><b>Post: </b> {{post.body}}</span>
          <br>
          <span id = 'postID'><b>PostID: </b> {{post.id}}</span>
        </div>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data
      let filterText = document.getElementById('filterDescription')
      filterText.innerHTML = ''
    },
    async filterByEvenId () {
      const result = await PostsService.fetchPosts()
      this.posts = []
      let filterText = document.getElementById('filterDescription')
      filterText.innerHTML = '<p> You are going to see only posts with an even PostID</p>'
      for (var i = 0; i < result.data.length; i++) {
        if (result.data[i].id % 2 === 0) {
          this.posts.push(result.data[i])
        }
      }
    },
    async filterByOddId () {
      const result = await PostsService.fetchPosts()
      let filterText = document.getElementById('filterDescription')
      filterText.innerHTML = '<p> You are going to see only posts with an odd PostID</p>'
      this.posts = []
      for (var i = 0; i < result.data.length; i++) {
        if (result.data[i].id % 2 === 1) {
          this.posts.push(result.data[i])
        }
      }
    }
  }
}
</script>
