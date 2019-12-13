"use strict"
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Report = use("App/Models/Report")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
class ReportController {
  /**
 * Show a list of all groups.
 * GET groups
 *
 * @param {object} ctx
 * @param {Request} ctx.request
 * @param {Response} ctx.response
 */
  async indexReport({ request, response }) {
    try {

      const Report = await Report.all()

      return Report
    } catch (error) {
      console.log(error)
      return response.status(500).send({ errorDetails: error, error: "Erro interno" })
    }

  }

  async createReport({ request, response }) {
    try {
      const data = request.only(["name", "type_report", "text"])

      const Report = await Report.create(data)

      return Report
    } catch (error) {
      console.log(error)
      return response.status(500).send({ errorDetails: error, error: "Erro interno" })
    }

  }
}

module.exports = ReportController
