'use strict'

const Schema = use('Schema')

class RooomSchema extends Schema {
  up() {
    this.create('properties', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('title').notNullable()
      table.string('block').notNullable()
      table.decimal('departament').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('properties')
  }
}

module.exports = RoomSchema
