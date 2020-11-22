import { Router } from "express";
import ObrasController from "./app/controllers/ObrasController";
import UsuariosController from "./app/controllers/UsuariosController";
import auth from "./app/middlewares/auth";

const routes = new Router();

// rotas para autenticação e criação de usuarios
routes.post("/api/v1/usuarios", UsuariosController.create);
routes.post("/api/v1/usuarios/auth", UsuariosController.authenticate);

// As rotas daqui pra baixo necessitam de autenticação
routes.use(auth);
routes.get("/api/v1/usuarios", UsuariosController.index);

routes.post("/api/v1/obras", ObrasController.create);
routes.get("/api/v1/obras", ObrasController.index);

export default routes;
