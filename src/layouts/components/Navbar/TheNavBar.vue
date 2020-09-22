<template>
  <v-app-bar app>
    <v-toolbar-title class="d-flex align-center">
      <v-img src="@/assets/love-road-logo.png" contain max-height="50px"/>
      <span v-if="$vuetify.breakpoint.smAndUp" class="display-1">Road to Love</span>
    </v-toolbar-title>
    <v-spacer/>
    <user-panel/>
  </v-app-bar>
</template>

<script>
import UserPanel from './UserPanel'

export default {
  name: 'TheNavBar',
  components: {
    UserPanel
  }
}
</script>
