import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import Obra from "../app/models/obra";
import Autor from "../app/models/autor";
import AutorObra from "../app/models/autorobra";
import TipoUsuario from "../app/models/tipousuario";
import Usuario from "../app/models/usuario";
import Pessoa from "../app/models/pessoa";

const models = [Obra, Autor, AutorObra, TipoUsuario, Usuario, Pessoa];

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
