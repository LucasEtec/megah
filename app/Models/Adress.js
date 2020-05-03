'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Adress extends Model {
  company () {
    return this.belongsTo('App/Models/Company')
  }
}

module.exports = Adress
