import DataTypes, { Model } from "sequelize";


class Pessoa extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: DataTypes.STRING,
        data_nascimento: DataTypes.STRING,
        curso: DataTypes.STRING,
        celular: DataTypes.STRING,
        ra: DataTypes.STRING,
        faculdade: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );

    return Pessoa;
  }

  static associate(models) {
    this.hasOne(models.Usuario, {
      as: "usuario",
      foreignKey: "id"
    });
  }
}

export default Pessoa;
