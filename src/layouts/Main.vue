<template>
  <v-app>
    <notify/>
    <the-nav-bar/>
    <v-main class="grey lighten-3">
      <v-container fluid style="height: 100%"
                   class="d-flex flex-column pa-2 pb-0">
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Notify from '@/components/Notify'
import TheNavBar from './components/Navbar/TheNavBar'
import users from '@/mixins/users'

export default {
  name: 'Main',
  mixins: [users],
  components: {
    Notify,
    TheNavBar
  },
  created () {
    if (!this.user) {
      this.$store.dispatch('setUserData')
    }
  }
}
</script>
