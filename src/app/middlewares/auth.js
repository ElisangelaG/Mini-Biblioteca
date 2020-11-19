import Usuario from "../models/usuario";
import PessoaCurso from "../models/pessoacurso";
import Curso from "../models/curso";

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
      const usuario = await Usuario.findByPk(id_usuario, {
        include: ["pessoa"]
      });
      const cursosPessoa = await PessoaCurso.findAll({
        where: { pessoa_id: usuario.pessoa.id }
      });
      const cursos = [];
      for (let i = 0; i < cursosPessoa.length; i++) {
        const current = await Curso.findByPk(cursosPessoa[i].curso_id);
        cursos.push(current.descricao);
      }

      req.usuario = usuario.dataValues;
      req.usuario.pessoa = req.usuario.pessoa.dataValues;
      req.usuario.pessoa.cursos = cursos;
      return next();
    }

    return res.status(401).json({ error: "Token inválido!" });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ error: "Token inválido!" });
  }
};
