'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Website extends Model {
  company(){
    this.belongsTo('App/Models/Company')
  }
  product () {
    this.hasMany('App/Models/Product')
  }
}

module.exports = Website
