import { makeAutoObservable } from 'mobx'

export default class UserStore {
  constructor () {
    this._isAuth = false
    this._user = {}
    this._userWidth = document.body.clientWidth
    this._userHeight = document.body.clientHeight
    makeAutoObservable(this)
  }

  setIsAuth (bool) {
    this._isAuth = bool
  }

  setUser (user) {
    this._user = user
  }

  setUserWidth (width) {
    this._userWidth = width
  }

  setUserHeight (height) {
    this._userHeight = height
  }

  get isAuth () {
    return this._isAuth
  }

  get user () {
    return this._user
  }

  get userWidth () {
    return this._userWidth
  }

  get userHeight () {
    return this._userHeight
  }
}
