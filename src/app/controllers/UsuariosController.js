import Obra from "../models/obra";
import Autor from "../models/autor";
import AutorObra from "../models/autorobra";
import Usuario from "../models/usuario";

class UsersController {
  async index(req, res, next) {
    try {
      const body = {
        resp: await Usuario.findAll({ include: ["tipo"] })
      };

      return res.json(body);
    } catch (err) {
      return next(err);
    }
  }
}

export default new UsersController();
