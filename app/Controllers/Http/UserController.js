"use strict";

const User = use("App/Models/User");

class UserController {
  // [GET] /users
  async index({ request, response, params }) {
    const { username } = request.all();
    const users = await User.query()
      .where(function() {
        if (!!username) {
          this.where("username", "like", `%${username}%`);
        }
      })
      .fetch();

    return users;
  }

  // [GET] /users/:id
  async show({ request, response, params }) {
    const user = await User.find(params.id);

    return user;
  }

  // [POST] /users
  async store({ request, response, params }) {
    const data = request.all();
    const user = new User();

    user.merge(data);
    await user.save();

    return user;
  }

  // [PUT] /users/:id
  async update({ request, response, params }) {
    const data = request.all();
    const user = await User.find(params.id);

    user.merge(data);
    await user.save();

    return user;
  }

  // [DELETE] /users/:id
  async destroy({ request, response, params }) {
    const user = await User.find(params.id);

    await user.delete();

    return user;
  }
}

module.exports = UserController;
