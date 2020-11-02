import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/Home.vue'),
    children: [
      {
        path: ':id',
        component: () => import(/* webpackChunkName: "note-detail" */ '../views/Home/NoteDetail.vue')
      }
    ]

  },
  {
    path: '/todolist',
    name: 'todolist',
    component: () => import(/* webpackChunkName: "to-do-list" */ '../views/ToDoList/ToDoList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
