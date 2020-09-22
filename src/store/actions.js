import router from '@/router'
import auth from '@/utils/auth'

export default {
  async getUsers ({ commit }) {
    commit('START_PRELOADER')
    try {
      const response = await fetch('/users.json')
      const users = await response.json()
      commit('SET_USERS', users)
    } catch (e) {
      commit('SET_NOTIFY', {
        text: 'Users not found',
        color: 'error'
      })
    } finally {
      commit('STOP_PRELOADER')
    }
  },
  async getUser ({ state, dispatch }, email) {
    if (!state.users) {
      await dispatch('getUsers')
    }
    return state.users.find(user => user.email === email)
  },
  async getUserInfo ({ state, dispatch }, id) {
    if (!state.users) {
      await dispatch('getUsers')
    }
    return state.users.find(user => user.id === id)
  },
  async login ({ commit, dispatch }, login) {
    const userIsLoggedIn = await dispatch('userIsLoggedIn', login)
    if (userIsLoggedIn) {
      return
    }
    const user = await dispatch('getUser', login)
    commit('START_PRELOADER')
    if (user) {
      auth.login(user)
      commit('SET_USER', user)
      commit('STOP_PRELOADER')
      await router.push(router.currentRoute.query.to || '/')
    } else {
      commit('STOP_PRELOADER')
      commit('SET_NOTIFY', {
        text: 'You are not registered',
        color: 'warning'
      })
    }
  },
  logout ({ commit }) {
    auth.clearTokens()
    commit('SET_USER', null)
    if (router.currentRoute.name !== 'login') {
      router.push({ path: '/login' })
    }
  },
  userIsLoggedIn ({ state, commit }, login) {
    // If user is already logged in notify and exit
    if (state.user && state.user.email === login) {
      commit('SET_NOTIFY', {
        text: 'You are already logged in!',
        color: 'warning'
      })
      router.push('/')
      return true
    }
    return false
  },
  async setUserData ({ commit, dispatch }) {
    const token = JSON.parse(auth.getToken())
    const user = await dispatch('getUser', token.email)
    commit('SET_USER', user)
  }
}
