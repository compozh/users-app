export default {
  SET_USERS (state, users) {
    state.users = users
  },
  SET_USER (state, user) {
    state.user = user
  },
  START_PRELOADER (state) {
    state.preLoader = true
  },
  STOP_PRELOADER (state) {
    state.preLoader = false
  },
  SET_NOTIFY (state, notify) {
    state.notify = notify
  }
}
