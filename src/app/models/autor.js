import DataTypes, { Model } from "sequelize";

class Autor extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING
      },
      {
        sequelize
      }
    );

    return Autor;
  }

  static associate(models) {
    this.belongsToMany(models.Obra, {
      through: "autor_obras",
      as: "obras",
      foreignKey: "autor_id",
      otherKey: "obra_id"
    });
  }
}

export default Autor;
