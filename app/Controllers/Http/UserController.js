"use strict"
/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use("App/Models/User")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
class UserController {
  /**
 * Show a list of all groups.
 * GET groups
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
  async create({ request, response }) {
    try {
      const data = request.only(["username", "type_user", "email", "password"])

      const user = await User.create(data)

      return user
    } catch (error) {
      console.log(error)
      return response.status(500).send({ errorDetails: error, error: "Erro interno" })
    }

  }
}

module.exports = UserController
