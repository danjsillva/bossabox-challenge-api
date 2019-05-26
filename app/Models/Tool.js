"use strict";

const Model = use("Model");

class Tool extends Model {
  static boot() {
    super.boot();

    this.addHook("beforeSave", async tool => {
      tool.tags = await JSON.stringify(tool.tags);
    });

    this.addHook("afterFind", async tool => {
      tool.tags = await JSON.parse(tool.tags);
    });

    this.addHook("afterFetch", async tools => {
      tools.map(async tool => {
        tool.tags = await JSON.parse(tool.tags);
      });
    });
  }
}

module.exports = Tool;
