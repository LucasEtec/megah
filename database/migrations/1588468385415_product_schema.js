'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('title', 50).notNullable()
      table.string('description', 250)
      table.decimal('price', 4,2)
      table.decimal('shipping', 2,2)
      table.integer('id_website', 10).notNullable().unsigned().references('id').inTable('websites')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
