import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Chat from '../views/chat/Chat.vue'
import Result from '../views/result/Result.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
