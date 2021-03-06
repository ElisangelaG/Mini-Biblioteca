import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import Obra from "../app/models/obra";
import Autor from "../app/models/autor";
import AutorObra from "../app/models/autorobra";
import TipoUsuario from "../app/models/tipousuario";
import Usuario from "../app/models/usuario";
import Pessoa from "../app/models/pessoa";
import Curso from "../app/models/curso";
import PessoaCurso from "../app/models/pessoacurso";
import AreaDeEstudo from "../app/models/areadeestudo";
import AreaDeEstudoObra from "../app/models/areadeestudoobra";
import TipoObra from "../app/models/tipoobra";

const models = [
  Obra,
  Autor,
  AutorObra,
  TipoUsuario,
  Usuario,
  Pessoa,
  Curso,
  PessoaCurso,
  AreaDeEstudo,
  AreaDeEstudoObra,
  TipoObra
];

class Database {
  constructor() {
    this.init();
  }

  async init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models.map(
      model => model.associate && model.associate(this.connection.models)
    );

    await this.connection.authenticate();
  }
}

export default new Database();
