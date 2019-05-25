"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ToolsTagsSchema extends Schema {
  up() {
    this.create("tools_tags", table => {
      table
        .integer("tools_id", 254)
        .notNullable()
        .references("id")
        .inTable("tools");
      table.string("description", 254).notNullable();
    });
  }

  down() {
    this.drop("tools_tags");
  }
}

module.exports = ToolsTagsSchema;
