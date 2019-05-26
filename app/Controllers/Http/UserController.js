"use strict";

const User = use("App/Models/User");

class UserController {
  async index({ request, response, params }) {
    const users = await User.all();

    return users;
  }

  async show({ request, response, params }) {
    const user = await User.find(params.id);

    return user;
  }

  async store({ request, response, params }) {
    const data = request.all();
    const user = new User();

    user.merge(data);
    await user.save();

    return user;
  }

  async update({ request, response, params }) {
    const data = request.all();
    const user = await User.find(params.id);

    user.merge(data);
    await user.save();

    return user;
  }

  async destroy({ request, response, params }) {
    const user = await User.find(params.id);

    await user.delete();

    return user;
  }
}

module.exports = UserController;
