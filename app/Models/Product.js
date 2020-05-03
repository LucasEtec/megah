'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  website () {
    return this.belongsTo('App/Models/Website')
  }
}

module.exports = Product
