"use strict";

class AuthController {
  async auth({ request, response, params, auth }) {
    const { username, password } = request.all();

    let token = await auth.attempt(username, password);

    return token;
  }

  async check({ request, response, params, auth }) {
    // let token = await auth.getAuthHeader()
    let user = await auth.getUser();

    return user;
  }
}

module.exports = AuthController;
