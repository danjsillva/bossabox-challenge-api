"use strict";

const Hash = use("Hash");

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

    data.password = await Hash.make(data.password);

    user.merge(data);
    await user.save();

    return user;
  }

  async update({ request, response, params }) {
    const data = request.all();
    const user = await User.find(params.id);

    if (data.password != user.password) {
      data.password = await Hash.make(data.password);
    }

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
