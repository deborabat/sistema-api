'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReportSchema extends Schema {
  up() {
    this.create('report', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('type_report').notNullable()
      table.string('text').nullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('reports')
  }
}

module.exports = ReportSchema
