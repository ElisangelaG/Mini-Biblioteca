import User from "../models/User";

class UsersController {
  async index(req, res, next) {
    try {
      const body = { resp: await User.findAll() };

      return res.json(body);
    } catch (err) {
      return next(err);
    }
  }
}

export default new UsersController();
