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
  return { greeting: "Welcome to VUTTR API" };
});

Route.group(() => {
  Route.post("/", "AuthController.auth");
  Route.get("/", "AuthController.check").middleware("auth");
}).prefix("/auth");

Route.group(() => {
  Route.get("/", "UserController.index");
  Route.get("/:id", "UserController.show");
  Route.post("/", "UserController.store");
  Route.put("/:id", "UserController.update");
  Route.delete("/:id", "UserController.destroy");
}).prefix("/users");

Route.group(() => {
  Route.get("/", "ToolController.index");
  Route.get("/:id", "ToolController.show");
  Route.post("/", "ToolController.store");
  Route.put("/:id", "ToolController.update");
  Route.delete("/:id", "ToolController.destroy");
})
  .prefix("/tools")
  .middleware("auth");
