import { request } from "express";
import Obra from "../models/obra";
import TipoObra from "../models/tipoobra";

const { Op } = require("sequelize");


class ObrasController {
  async create(req, res, next) {
    if (!req.body) {
      return res.status(400).json({ error: "Dados incompletos!" });
    }

    try {
     
        const tipoObra = await TipoObra.findOrCreate({
            where: { descricao: req.body.tipo_obra },
            defaults: {
                descricao: req.body.tipo_obra
            }
        });
        const result = await Obra.create(
        {
            ...req.body,
            usuario_id: req.usuario_id,
            tipo_obra_id: tipoObra[0].dataValues.id
        });
        return res.json({ result });
    } catch (err) {
      return next(err);
    }
  }

  async index(req, res, next) {
    try {
        let result = null;
        if(req.query.titulo)
            result = await Obra.findAll({
                where: {
                    titulo: {
                        [Op.like]: `%${req.query.titulo}%`
                    }
                },
                include: ['tipo']
            });
        else if (req.query.id)
            result = await Obra.findByPk(req.query.id, {include:['tipo']});
        else 
            result = await Obra.findAll({include:['tipo']});
        return res.json(result);
    } catch (err) {
      return next(err);
    }
  }

}

export default new ObrasController();
