'use strict'
/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.group(() => {
  Route.post('/users', 'UserController.create').validator("CreateUser")
  Route.get('/users', 'UserController.index')
  Route.post('/sessions', 'SessionController.create').validator("AuthUser")
  Route.post('/room', 'RoomController.create')
  Route.get('/room', 'RoomController.index')
  Route.get('/room/schedule', 'RoomController.indexSchedule')
  Route.post('/room/schedule', 'ScheduleController.create')
}).prefix('v1')

