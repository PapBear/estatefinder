import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/HomeIndex.vue'
import Chat from '../views/chat/Chat.vue'
import Result from '../views/result/Result.vue'
import Detail from '../views/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat
  },
  {
    path: '/result',
    name: 'Result',
    component: Result,
    props: true
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
