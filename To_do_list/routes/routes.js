const routes = require("express").Router();
const TaskControler = require("../controller/TaskController.js")

routes.get("/", TaskControler.getAll);

module.exports = routes
