import Obra from "../models/obra";
import Autor from "../models/autor";
import AutorObra from "../models/autorobra";

class UsersController {
  async index(req, res, next) {
    try {
      const body = {
        resp: await Autor.findAll({ include: ["obras"] })
      };

      return res.json(body);
    } catch (err) {
      return next(err);
    }
  }
}

export default new UsersController();
