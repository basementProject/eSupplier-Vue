import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddClient from '@/components/Supplier/AddClient'
import Clients from '@/components/Supplier/Clients'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import SupplierOrders from '@/components/Orders/SupplierOrders'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/orders/suppliers',
      name: 'SupplierOrders',
      component: SupplierOrders
    },
    {
      path: '/client/add',
      name: 'AddClient',
      component: AddClient
    },
    {
      path: '/clients',
      name: 'Clients',
      component: Clients
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
