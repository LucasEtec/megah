'use strict'

const Adress = use('App/Models/Adress')

class AdressController {

  async index({auth, response}) {
    return await Adress
    .table('users')
    .where('username', 'john')

  }



  async store ({ request, response }) {
    const data = await request.only(['adress','number','cep','complement'])

    const adress = await Adress.create(data)

    return adress
  }

  async show ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  /**
   * Delete a adress with id.
   * DELETE adresses/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = AdressController
