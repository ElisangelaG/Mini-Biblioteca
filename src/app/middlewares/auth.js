import Usuario from "../models/usuario";

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Falta token!" });
  }
  try {
    const [, token] = authHeader.split(" ");

    // verifica se token passado por usuario é válido
    const { id_usuario } = jwt.verify(token, process.env.token_secret);

    // cria um objeto usuario no request
    if (id_usuario) {
      const usuario = await Usuario.findByPk(id_usuario);
      req.usuario = usuario.dataValues;
      return next();
    }

    return res.status(401).json({ error: "Token inválido!" });
  } catch (err) {
    return res.status(401).json({ error: "Token inválido!" });
  }
};
