"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class ToolsTagsSchema extends Schema {
  up() {
    this.create("tool_tags", table => {
      table
        .integer("tool_id", 254)
        .notNullable()
        .references("id")
        .inTable("tools");
      table.string("description", 254).notNullable();
    });
  }

  down() {
    this.drop("tool_tags");
  }
}

module.exports = ToolsTagsSchema;
