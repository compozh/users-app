<template>
  <v-card :to="{name: 'user-info', params: {userId: user.id}}"
          class="mb-5 pa-3">
    <div class="d-flex align-center px-3">
      <v-avatar :color="user.gender === 'Female' ? 'pink' : 'indigo'">
        <span class="white--text headline">{{ initials(user) }}</span>
      </v-avatar>
      <div>
        <v-card-title>{{ userName(user) }}</v-card-title>
        <v-card-subtitle>{{ user.email }}</v-card-subtitle>
      </div>
      <v-spacer/>
      <div class="d-flex flex-column align-self-start">
        <span class="overline grey--text">{{ user.gender }}</span>
      </div>
    </div>
    <div class="d-flex justify-space-between flex-wrap">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque esse harum labore rem! Atque consequuntur, debitis fugit necessitatibus sit unde?
      </v-card-text>
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
</template>

<script>
import users from '@/mixins/users'

export default {
  name: 'UserListItem',
  mixins: [users],
  props: {
    user: Object
  },
  computed: {
    initials () {
      return user => {
        return user.first_name[0] + user.last_name[0]
      }
    }
  }
}
</script>

<style scoped>

</style>
