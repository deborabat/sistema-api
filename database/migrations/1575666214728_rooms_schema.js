'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RoomsSchema extends Schema {
  up() {
    this.create('rooms', (table) => {
      table.increments()
      table.string('title').notNullable()
      table.string('block').notNullable()
      table.string('department').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('rooms')
  }
}

module.exports = RoomsSchema
