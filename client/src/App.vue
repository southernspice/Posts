<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-display: center;
}
#user {
  height: 5%;
  width: 5%;
  float: left;
}

#userID {
  float: left;
}
#title, #post, #postID {
  float: left;
}
#postContainer{
  width: 98%;
  border: 1px solid #e3e3e3;
  min-height: 150px;
  padding: 10px 10px 10px 10px;
}
</style>
