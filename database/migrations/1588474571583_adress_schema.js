'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AdressSchema extends Schema {
  up () {
    this.create('adresses', (table) => {
      table.increments()
      table.string('adress', 120).notNullable()
      table.integer('number', 10).notNullable()
      table.integer('cep',8).notNullable()
      table.string('complement', 120)
      table.integer('id_company',10).unsigned().notNullable().references('id').inTable('companies')
      table.timestamps()
    })
  }

  down () {
    this.drop('adresses')
  }
}

module.exports = AdressSchema
