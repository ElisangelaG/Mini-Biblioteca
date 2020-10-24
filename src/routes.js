import { Router } from "express";
import UsersController from "./app/controllers/UsersController";

const routes = new Router();

routes.get("/api/v1/users", UsersController.index);

export default routes;
