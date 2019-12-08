'use strict'

class AuthUser {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      password: "required",
      email: "required|email",
    }
  }
  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    });
  }
  get messages() {
    return {
      'password.required': "Senha é Obrigatorio",
      'email.required': "Email é Obrigatorio",
      'email.email': "Email invalido",
    }
  }
}

module.exports = AuthUser
