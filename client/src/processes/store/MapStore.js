import { makeAutoObservable } from 'mobx'

export default class MapStore {
  constructor () {
    this._pickedRects = []
    this._scale = 100
    makeAutoObservable(this)
  }

  setPickedRects (pickedRects) {
    this._pickedRects = pickedRects
  }

  setScale (scale) {
    this._scale = scale
  }

  get pickedRects () {
    return this._pickedRects
  }

  get scale () {
    return this._scale
  }
}
