export default class Auth {

  static _tokenKey = 'app-token'

  static login (user) {
    localStorage.setItem(this._tokenKey, JSON.stringify({
      timestamp: Date.now(),
      email: user.email
    }))
  }

  static clearTokens () {
    localStorage.removeItem(this._tokenKey)
  }

  static getToken () {
    return localStorage.getItem(this._tokenKey)
  }
}
