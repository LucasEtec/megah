'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class WebsiteSchema extends Schema {
  up () {
    this.create('websites', (table) => {
      table.increments()
      table.string('color',20)
      table.string('phone', 11)
      table.string('email', 90)
      table.integer('category', 2).notNullable()
      table.integer('template', 2)
      table.integer('id_company',10).unsigned().notNullable().references('id').inTable('companies')
      table.timestamps()
    })
  }

  down () {
    this.drop('websites')
  }
}

module.exports = WebsiteSchema
