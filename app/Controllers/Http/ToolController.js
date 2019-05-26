"use strict";

const Tool = use("App/Models/Tool");

class ToolController {
  // [GET] /tools?tag=node
  async index({ request, response, params }) {
    const { title, tag } = request.all();
    const tools = await Tool.query()
      .where(function() {
        if (!!title) {
          this.where("title", "like", `%${title}%`);
        }

        if (!!tag) {
          this.where("tags", "like", `%${tag}%`);
        }
      })
      .fetch();

    return tools;
  }

  // [GET] /tools/:id
  async show({ request, response, params }) {
    const tool = await Tool.find(params.id);

    return tool;
  }

  // [POST] /tools
  async store({ request, response, params }) {
    const data = request.all();
    const tool = new Tool();

    tool.merge(data);
    await tool.save();

    return tool;
  }

  // [PUT] /tools/:id
  async update({ request, response, params }) {
    const data = request.all();
    const tool = await Tool.find(params.id);

    tool.merge(data);
    await tool.save();

    return tool;
  }

  // [DELETE] /tools/:id
  async destroy({ request, response, params }) {
    const tool = await Tool.find(params.id);

    await tool.delete();

    return tool;
  }
}

module.exports = ToolController;
