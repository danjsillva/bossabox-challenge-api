"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ToolsSchema extends Schema {
  up() {
    this.create("tools", table => {
      table.increments();
      table.timestamps();
      table.string("title", 96).notNullable();
      table.string("link", 1024).notNullable();
      table.string("description", 1024).notNullable();
      table.string("tags", 4096);
    });
  }

  down() {
    this.drop("tools");
  }
}

module.exports = ToolsSchema;
