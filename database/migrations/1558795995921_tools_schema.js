"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ToolsSchema extends Schema {
  up() {
    this.create("tools", table => {
      table.increments();
      table.timestamps();
      table.string("title", 80).notNullable();
      table.string("link", 254).notNullable();
      table.string("description", 254).notNullable();
    });
  }

  down() {
    this.drop("tools");
  }
}

module.exports = ToolsSchema;
