'use strict'

const Product = use('App/Model/Product')
class ProductController {
  async index ({ request, response }) {
    const product = await Product.query().where('id_website', params.web_id)

    return product
  }


  async store ({ request, params  }) {
    const data = request.only([
      'title',
      'description',
      'price',
      'shipping'
    ])

    const product = Product.create({...data, id_website: params.web_id})

    return product
  }

  async show ({ params, request, response }) {
    const product = Product.findOrFail(params.id)
    return product
  }


  async update ({ params, request, response }) {
    const product = Product.findOrFail(params.id)
    const data = request.only([
      'title',
      'description',
      'price',
      'shipping'
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
