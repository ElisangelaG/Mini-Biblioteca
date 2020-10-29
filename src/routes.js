import { Router } from "express";
import UsuariosController from "./app/controllers/UsuariosController";

const routes = new Router();

routes.get("/api/v1/users", UsuariosController.index);

export default routes;
