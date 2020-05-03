'use strict'

const User = use('App/Models/User')

class UserController {

  async store ({ request, response }) {
    const data = await request.only(['username','email','password','CPForCNPJ','PJ'])

    const user = await User.create(data)

    return user
  }

  async show ({ auth }) {
    return await User.findOrFail(auth.user.id)
  }

}

module.exports = UserController
