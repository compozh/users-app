<template>
  <v-dialog v-model="userDialog"
            persistent
            no-click-animation
            max-width="800px">

    <div class="d-flex justify-space-between align-center mb-2">
      <div class="d-flex white px-2"
           style="height: 25px; border-radius: 5px;">
        <div class="px-3" style="color: #2D469C;">User Info</div>
        <v-img src="@/assets/chevron.svg" width="10px"/>
        <div class="px-3 primary--text">{{ userName(userInfo) }}</div>
      </div>
      <v-btn fab x-small
             depressed
             color="white"
             class="btn-close"
             @click="closeUserInfo">
        <v-icon color="#979797">mdi-window-close</v-icon>
      </v-btn>
    </div>
    <v-card class="pa-5">
      <div class="d-flex">
        <v-avatar class="mx-3" color="grey" size="180" tile>
          <v-icon color="white" size="180">mdi-account</v-icon>
        </v-avatar>
        <div>
          <div class="display-2 mb-5">{{ userName(userInfo) }}</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus eius, ipsum laborum tenetur voluptas!</div>
          <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam doloribus eius, ipsum laborum tenetur voluptas!</div>
        </div>
      </div>

      <div class="ml-5 mt-5">
        <div>
          <v-icon class="mr-3">mdi-email</v-icon>
          <span class="overline grey--text" style="font-size: 15px !important;">Email: </span>
          <span class="primary--text">{{ userInfo.email }}</span>
        </div>
        <div>
          <v-icon class="mr-3">mdi-city</v-icon>
          <span class="overline grey--text" style="font-size: 15px !important;">City: </span>
          <span class="primary--text">not indicated</span>
        </div>
        <div>
          <v-icon class="mr-3">mdi-web</v-icon>
          <span class="overline grey--text" style="font-size: 15px !important;">Country: </span>
          <span class="primary--text">not indicated</span>
        </div>
      </div>

      <div class="d-flex justify-end">
        <v-card-actions>
          <v-btn icon color="deep-orange">
            <v-icon>mdi-thumb-up</v-icon>
          </v-btn>
          <v-btn icon color="indigo">
            <v-icon>mdi-message</v-icon>
          </v-btn>
          <v-btn icon color="green">
            <v-icon>mdi-phone</v-icon>
          </v-btn>
          <v-btn icon color="red">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import users from '@/mixins/users'

export default {
  name: 'UserInfo',
  mixins: [users],
  data: () => ({
    userInfo: {},
    userDialog: false
  }),
  created () {
    this.getUserInfo()
  },
  methods: {
    async getUserInfo () {
      const userId = +this.$route.params.userId
      const userInfo = await this.$store.dispatch('getUserInfo', userId)
      this.userInfo = userInfo || {}
      this.userDialog = true
    },
    closeUserInfo () {
      this.userDialog = false
      this.$router.push('/users')
    }
  }
}
</script>
