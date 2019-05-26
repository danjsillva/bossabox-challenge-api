"use strict";

const Hash = use("Hash");

const Model = use("Model");

class User extends Model {
  static boot() {
    super.boot();

    this.addHook("beforeSave", async user => {
      if (user.dirty.password) {
        user.password = await Hash.make(user.password);
      }
    });
  }

  static get hidden() {
    return ["password"];
  }
}

module.exports = User;
