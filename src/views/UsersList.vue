<template>
  <perfect-scrollbar id="scroll-target"
                     class="d-flex justify-center flex-grow-1"
                     style="flex-basis: 0;">

    <v-col xs="12" sm="10" md="8" lg="7" xl="6"
           v-scroll:#scroll-target="onScroll">
      <user-list-item v-for="user in usersList" :key="user.id" :user="user"/>
    </v-col>
    <router-view/>
  </perfect-scrollbar>
</template>

<script>
import UserListItem from '@/views/UserListItem'
import users from '@/mixins/users'

export default {
  name: 'UserList',
  mixins: [users],
  components: {
    UserListItem
  },
  data: () => ({
    usersList: [],
    step: 10,
    offset: 0
  }),
  watch: {
    // for reload case
    users (users) {
      if (users.length) {
        this.getUsersList()
      }
    }
  },
  // for first load case
  mounted () {
    if (this.users && this.users.length) {
      this.getUsersList()
    }
  },
  methods: {
    getUsersList () {
      const begin = this.usersList.length
      const end = begin + this.step
      this.usersList = [
        ...this.usersList,
        ...this.users.slice(begin, end)
      ]
    },
    // primitive implementation for lazy load
    onScroll (e) {
      if (e.target.scrollTop > (e.target.clientHeight + this.offset)) {
        this.offset = this.offset + e.target.clientHeight
        this.getUsersList()
      }
    }
  }
}
</script>

<style scoped>

</style>
