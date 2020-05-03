'use strict'

const Company = use('App/Models/Company')

class CompanyController {

  async index ({ auth }) {
    const company = Company.query().where('user_id', auth.user.id)

    return company
  }

  async store ({ request, auth }) {
    const data = request.only(['name','description','img_url'])

    const company = await Company.create(
      {...data, user_id: auth.user.id})

    return data
  }

  async show ({ params}) {
    const company = await Company.findOrFail(params.id)

    return company
  }

  async update ({ params, auth,response,request }) {

    if(params.id != auth.user.id){
      return response.status(404).send({ message: 'You are not owner' })
    }
    const company = Company.findOrFail(params.id)
    const data = request.only(['name','description','img_url'])

    company.merge(data)
    company.save()

    return company

  }

  async destroy ({ params, request, response }) {
  }

}

module.exports = CompanyController
