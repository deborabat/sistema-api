'use strict'
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Room = use("App/Models/Room")
const moment = require('moment');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */


class RoomController {

  async index({ request, response }) {
    try {

      const room = await Room
        .query()
        .with("schedule.user")
        .with("schedule.room")
        .with("schedule", builder => {
          builder.where("date", ">", moment().format("YYYY-MM-DD"))
        })
        .fetch()

      return room
    } catch (error) {
      console.log(error)
      return response.status(500).send({ errorDetails: error, error: "Erro interno" })
    }

  }


  async create({ request, response, view }) {
    console.log('adas')
    try {
      const data = request.only(["title", "block", "department"])

      const room = await Room.create(data)
      return room
    } catch (error) {
      console.log(error)
      return response.status(500).send({ error })
    }
  }

  async store({ request, response }) {

  }

  async show({ params, request, response, view }) {
  }
  async edit({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = RoomController
