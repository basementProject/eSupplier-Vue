<template>
  <v-container grid-list-xl>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router to="/clients" class="secondary">My Clients</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router to="/products" class="secondary">My Products</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap >
      <v-flex xs12 md10 offset-md1>> 
        <v-carousel>
          <v-carousel-item
            v-for="product in products"
            v-bind:src="product.imageUrl"
            :key="product.id">
              <div class="title">
                {{product.title}}
              </div>
            </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center">
        <p>Find your clients</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          { imageUrl: 'https://c1.staticflickr.com/4/3926/14931675222_8b8705cf54_b.jpg', id: '12312231', title: 'Beers' },
          { imageUrl: 'https://cdn.pixabay.com/photo/2017/05/23/20/14/cheese-2338430_960_720.jpg', id: '21241555', title: 'Cheese' }
        ]
      }
    }
  }
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    background-color: rgba(0,0,0,0.5);
    color: white;
    font-size: 2em;
    padding: 10px;
  }
</style>

