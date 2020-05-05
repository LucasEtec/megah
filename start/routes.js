'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/users', 'UserController.store')
Route.post('/sessions', 'SessionController.store')
Route.get('/web/:id_company/:id', 'CompanyController.show')
Route.get('/files/:id', 'FileController.show')
Route.get('/products/:id_web', 'ProductController.index')
Route.get('/product/:id', 'ProductController.show')


Route.group(() => {
  Route.post('/files', 'FileController.store')
  Route.get('/companies', 'CompanyController.index')
  Route.post('/companies', 'CompanyController.store')
  Route.put('/companies/:id', 'CompanyController.update')

  Route.resource('companies.web', 'WebsiteController').apiOnly().except(['show'])
  Route.resource('web.product', 'ProductController').apiOnly().except(['index','show'])
}).middleware('auth')
