'use strict'
/** @type {import('@adonisjs/lucid/src/Factory')} */
const User = use("App/Models/User")
class SessionController {
  async create({ request, auth }) {
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)
    const user = await User.findBy('email', email)
    console.log(user.type)
    console.log(user)
    return { ...token, role: user.type_user }
  }
}

module.exports = SessionController
