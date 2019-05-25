"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Wellcome to VUTTR API" };
});

Route.get("/users", "UserController.index");
Route.get("/users/:id", "UserController.show");
Route.post("/users", "UserController.store");
Route.put("/users/:id", "UserController.update");
Route.delete("/users/:id", "UserController.destroy");

Route.get("/tools", "ToolController.index");
Route.get("/tools/:id", "ToolController.show");
Route.post("/tools", "ToolController.store");
Route.put("/tools/:id", "ToolController.update");
Route.delete("/tools/:id", "ToolController.destroy");
