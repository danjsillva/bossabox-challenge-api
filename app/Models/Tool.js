"use strict";

const Model = use("Model");

class Tool extends Model {
  tags() {
    return this.hasMany('App/Models/ToolTags')
  }
}

module.exports = Tool;
