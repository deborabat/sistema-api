'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.group(() => {
  Route.post('/users', 'UserController.create').validator("CreateUser")
  Route.post('/sessions', 'SessionController.create').validator("AuthUser")
  Route.post('/room', 'RoomController.create')
}).prefix('v1')

