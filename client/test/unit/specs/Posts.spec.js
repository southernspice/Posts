import Vue from 'vue'
import Posts from '@/components/Posts'

describe('Posts.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Posts)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.posts h1').textContent)
      .to.equal('Posts')
  }),
  it('should have a button to filter by even postID', () => {
    const Constructor = Vue.extend(Posts)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#filterEvenId').textContent)
      .to.equal('Filter by even PostID')
  }),
  it('should have a button to filter by odd postID', () => {
    const Constructor = Vue.extend(Posts)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('#filterOddId').textContent)
      .to.equal('Filter by odd PostID')
  })
})
