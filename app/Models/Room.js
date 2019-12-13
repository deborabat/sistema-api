'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Room extends Model {
  schedule() {
    return this.hasMany('App/Models/Schedule')
  }
}

module.exports = Room
