import Obra from "../models/obra";
import Usuario from "../models/usuario";
import Pessoa from "../models/pessoa";
import TipoUsuario from "../models/tipousuario";

const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

class UsuariosController {
  async create(req, res, next) {
    if (!req.body.login || !req.body.senha || !req.body.email) {
      return res.status(400).json({ error: "Dados incompletos!" });
    }

    try {
      let usuario = await Usuario.findOne({
        where: {
          [Op.or]: [{ login: req.body.login }, { email: req.body.email }]
        }
      });

      if (usuario) {
        return res.status(409).json({ error: "Usuário já existe!" });
      }

      usuario = await Usuario.create(
        { 
          ...req.body,
          tipo_usuario_id: (req.tipo === 'master' ? 1 : 2)
        }, 
        { 
          include: ["pessoa"]
        }
      );
      
      delete usuario.dataValues.senha;
      return res.json({ usuario });
    } catch (err) {
      return next(err);
    }
  }

  async index(req, res, next) {
    try {
      const usuario = { ...req.usuario };
      delete usuario.senha;

      return res.json({ usuario });
    } catch (err) {
      return next(err);
    }
  }

  async authenticate(req, res, next) {
    if (!req.body.login || !req.body.senha)
      return res.status(400).json({ error: "Login e senha são obrigatórios" });

    try {
      const usuario = await Usuario.findOne({
        where: {
          login: req.body.login
        }
      });

      if (usuario && usuario.validarSenha(req.body.senha)) {
        const token = jwt.sign(
          { id_usuario: usuario.id },
          process.env.token_secret,
          {
            expiresIn: "1h"
          }
        );

        return res.status(200).json({
          token: `Bearer ${token}`
        });
      }
      return res.status(401).json({ error: "Não autorizado!" });
    } catch (err) {
      return next(err);
    }
  }
}

export default new UsuariosController();
