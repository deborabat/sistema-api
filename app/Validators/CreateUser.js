'use strict'

class CreateUser {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      username: "required",
      type_user: "required",
      password: "required",
      email: "required|email|unique:users",
    }
  }
  async fails(errorMessages) {
    return this.ctx.response.status(400).json({
      message: errorMessages[0].message
    });
  }
  get messages() {
    return {
      'username.required': "Nome Obrigatorio",
      'type_user.required': "Tipo de usuario é Obrigatorio",
      'password.required': "Senha é Obrigatorio",
      'email.required': "Email é Obrigatorio",
      'email.email': "Email invalido",
      'email.unique': "Email já foi cadastrado",
    }
  }
}

module.exports = CreateUser
