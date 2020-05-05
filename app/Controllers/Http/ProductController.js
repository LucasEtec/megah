'use strict'

const Product = use('App/Models/Product')
class ProductController {
  async index ({ params }) {
    const product = await Product.query().where('id_website', params.id_web).fetch()

    return product
  }


  async store ({ request, params  }) {
    const data = request.only([
      'title',
      'description',
      'price',
      'shipping',
      'img_url'
    ])

    const product = Product.create({...data, id_website: params.web_id})

    return product
  }

  async show ({ params }) {
    const product = Product.findOrFail(params.id)
    return product
  }


  async update ({ params, request, response }) {
    const product = Product.findOrFail(params.id)
    const data = request.only([
      'title',
      'description',
      'price',
      'shipping',
      'img_url'
    ])

    product.merge(data)
    product.save()

    return product
  }

  async destroy ({ params, request, response }) {
    const product = Product.findOrFail(params.id)

    await product.delete()
  }
}

module.exports = ProductController
