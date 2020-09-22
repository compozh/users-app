export default {
  computed: {
    users () {
      return this.$store.state.users
    },
    userName () {
      return user => {
        const _user = user || this.user
        return _user ? `${_user.first_name} ${_user.last_name}` : ''
      }
    }
  }
}
