<template>
  <v-container>
    <v-layout row wrap>
      <v-flex elevation-2 xs12 sm10 md10 offset-sm1 offset-md1 
        v-for="order in orders" :key="order.id"
        class="my-2">
        <v-card class="secondary white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media v-bind:src="order.imageUrl" height="125px"></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <div>
                  <div class="headline">{{order.title}}</div>
                  <div>{{ order.message }}</div>
                </div>
                <v-card-actions class="pl-0 mt-2">
                  <v-btn small class="white--text info">
                    <v-icon left>info_outline</v-icon>
                    Details
                  </v-btn>
                  <v-btn small class="white--text success">
                    <v-icon left>send</v-icon>
                    Send
                  </v-btn>
                  <v-btn small class="white--text primary">
                    <v-icon left>delete</v-icon>
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        orders: [
          {
            id: '1',
            imageUrl: 'http://www.studiolive.gr/welcome/wp-content/uploads/2015/06/BAGEL_LOGO-800x580.jpg',
            title: '25/10 Bagel Bar',
            message: 'Somethings that I wanted to buy and I came to you'
          },
          {
            id: '2',
            imageUrl: 'https://img.syrostoday.gr/business/original/grigoris.jpg',
            title: '24/10 Γρηγόρης',
            message: 'Somethings that I wanted to buy and I came to you'
          },
          {
            id: '3',
            imageUrl: 'https://www.tgifridays.com/etc/designs/fridays-www/clientlib-site/images/Fridays_logo.png',
            title: '21/10 Fridays',
            message: 'Somethings that I wanted to buy and I came to you'
          }
        ]
      }
    }
  }

</script>
