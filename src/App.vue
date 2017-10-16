<template>
  <v-app light>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile 
          @click="" 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="red darken-3">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">e-Supplier</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn 
          flat 
          v-for="item in menuItems" 
          :key="item.title" 
          router
          :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [{
        icon: 'fa-cutlery',
        title: 'Products',
        link: '/'
      },
      {
        icon: 'fa-address-book',
        title: 'Clients',
        link: '/clients'
      },
      {
        icon: 'fa-shopping-cart',
        title: 'Orders',
        link: '/'
      },
      {
        icon: 'fa-clock-o',
        title: 'History',
        link: '/'
      },
      {
        icon: 'fa-user',
        title: 'Profile',
        link: '/profile'
      },
      {
        icon: 'face',
        title: 'Sign up',
        link: '/signup'
      },
      {
        icon: 'fa-sign-in',
        title: 'Sign in',
        link: '/signin'
      }
      ]
    }
  }
}
</script>

<style lang="stylus">
@import './stylus/main';
</style>
