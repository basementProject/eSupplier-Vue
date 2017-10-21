<template>
  <v-container>
    <v-layout row wrap>
      <v-flex elevation-2 xs12 sm10 md10 offset-sm1 offset-md1>
        <!-- <v-card class="secondary">
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media src="http://www.studiolive.gr/welcome/wp-content/uploads/2015/06/BAGEL_LOGO-800x580.jpg" height="125px"></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div style="margin-top:0px">
                    <h5 class="white--text mb-0">25/10 Bagel Bar</h5>
                    <div class="mb-0">Somethings that I wanted to buy and I came to you</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat class="white--text primary">
                    <v-icon left>fa-bullseye</v-icon>
                    Details
                  </v-btn>
                  <v-btn flat class="white--text primary">
                    <v-icon left>fa-paper-plane</v-icon>
                    Send
                  </v-btn>
                  <v-btn flat class="white--text primary">
                    <v-icon left>fa-trash</v-icon>
                    Delete
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card> -->
        <v-card class="secondary white--text">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media src="http://www.studiolive.gr/welcome/wp-content/uploads/2015/06/BAGEL_LOGO-800x580.jpg" height="125px" contain></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <div>
                  <div class="headline">Supermodel</div>
                  <div>Foster the People</div>
                </div>
                <!-- <v-card-title primary-title>
                  <div style="margin-top:0px">
                    <h5 class="white--text mb-0">25/10 Bagel Bar</h5>
                    <div class="mb-0">Somethings that I wanted to buy and I came to you</div>
                  </div>
                </v-card-title> -->
                <v-card-actions>
                  <v-btn class="white--text primary">
                    <v-icon left>fa-bullseye</v-icon>
                    Details
                  </v-btn>
                  <v-btn class="white--text primary">
                    <v-icon left>fa-paper-plane</v-icon>
                    Send
                  </v-btn>
                  <v-btn class="white--text primary">
                    <v-icon left>fa-trash</v-icon>
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
