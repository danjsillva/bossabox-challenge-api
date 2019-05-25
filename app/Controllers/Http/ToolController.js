"use strict";

const Tool = use("App/Models/Tool");

class ToolController {
  async index({ request, response, params }) {
    const tools = await Tool.all();

    return tools;
  }

  async show({ request, response, params }) {
    const tool = await Tool.find(params.id);

    return tool;
  }

  async store({ request, response, params }) {
    const data = request.all();
    const tool = new Tool();

    tool.merge(data);
    await tool.save();

    return tool;
  }

  async update({ request, response, params }) {
    const data = request.all();
    const tool = await Tool.find(params.id);

    tool.merge(data);
    await tool.save();

    return tool;
  }

  async destroy({ request, response, params }) {
    const tool = await Tool.find(params.id);

    await tool.delete();

    return tool;
  }
}

module.exports = ToolController;
