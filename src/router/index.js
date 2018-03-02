import Vue from 'vue'
import Router from 'vue-router'
import CreateUser from '@/components/CreateUser'
import ShowUser from '@/components/ShowUser'
import UserList from '@/components/UserList'

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'CreateUser',
      component: CreateUser
    },
    {
      path: '/user-list',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/show-user',
      name: 'ShowUser',
      component: ShowUser
    }

  ]
})
