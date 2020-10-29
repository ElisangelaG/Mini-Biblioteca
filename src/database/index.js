import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import User from "../app/models/User";
import Obra from "../app/models/obra";
import Autor from "../app/models/autor";
import AutorObra from "../app/models/autorobra";

const models = [Obra, Autor, AutorObra];

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
