<template>
  <div>
    <span v-if="$vuetify.breakpoint.smAndUp" class="title">{{ userName() }}</span>
    <v-avatar class="mx-3" color="primary" size="35" tile>
      <v-icon color="white">mdi-account</v-icon>
    </v-avatar>
    <v-tooltip bottom>
      <template #activator="{ on }">
        <v-btn icon v-on="on"
               @click="$store.dispatch('logout')">
          <v-icon size="35">mdi-logout</v-icon>
        </v-btn>
      </template>
      <span>Logout</span>
    </v-tooltip>
  </div>
</template>

<script>
import users from '@/mixins/users'

export default {
  name: 'UserPanel',
  mixins: [users],
  computed: {
    user () {
      return this.$store.state.user
    },
  }
}
</script>

<style scoped>

</style>
