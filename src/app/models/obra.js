import DataTypes, { Model } from "sequelize";

class Obra extends Model {
  static init(sequelize) {
    super.init(
      {
        titulo: DataTypes.STRING,
        data_insercao: DataTypes.DATE,
        arquivo: DataTypes.STRING,
        publicacao: DataTypes.STRING,
        cidade_publicacao: DataTypes.STRING,
        congresso: DataTypes.STRING,
        revista: DataTypes.STRING,
        doi: DataTypes.STRING,
        issn: DataTypes.STRING,
        isbn: DataTypes.STRING,
        resumo: DataTypes.STRING,
        usuario_id: DataTypes.INTEGER,
        tipo_obra_id: DataTypes.INTEGER,
      },
      {
        sequelize
      }
    );

    return Obra;
  }

  static associate(models) {
    this.hasOne(models.Usuario, {
      as: "usuario",
      foreignKey: "id"
    });
    this.belongsToMany(models.Autor, {
      through: "autor_obras",
      as: "autors",
      foreignKey: "obra_id",
      otherKey: "autor_id"
    });
    this.belongsToMany(models.Autor, {
      through: "area_de_estudo_obras",
      as: "areas_de_estudo",
      foreignKey: "obra_id",
      otherKey: "area_de_estudo_id"
    });
  }
}

export default Obra;
