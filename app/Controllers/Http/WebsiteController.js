'use strict'

const Website = use('App/Models/Website')



class WebsiteController {

  async store ({ request, response, params, auth }) {
    const data = request.only(['color','phone','email','category','template'])

    const website = Website.create({...data, id_company: params.companies_id})

    return website
  }

  async show ({ params }) {
    const website = findOrFail(params.id)

    return task
  }

  async update ({ params, request, response }) {
    const website = findOrFail(params.id)
    const data = request.only(['color','phone','email','category','template'])

    website.merge(data)
    website.save()

    return website
  }
}

module.exports = WebsiteController
