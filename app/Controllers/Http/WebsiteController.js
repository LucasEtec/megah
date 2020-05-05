'use strict'

const Website = use('App/Models/Website')





class WebsiteController {

  async store ({ request, response, params, auth }) {
    const data = request.only(['color','phone','email'])

    const website = Website.create({...data, id_company: params.companies_id, template: 0, category: ''})

    return website
  }

  async show ({ params }) {
    const website = await Website.query().where('id', params.id).fetch()



    return website
  }

  async update ({ params, request, response }) {
    const website = await Website.findOrFail(params.id)
    const data = request.only(['color','phone','email','category','template'])

    website.merge(data)
    website.save()

    return website
  }
}

module.exports = WebsiteController
