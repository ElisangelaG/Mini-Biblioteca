import DataTypes, { Model } from "sequelize";

class Curso extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: DataTypes.STRING
      },
      {
        sequelize
      }
    );

    return Curso;
  }

  static associate(models) {
    this.belongsToMany(models.Obra, {
      through: "pessoa_cursos",
      as: "pessoas",
      foreignKey: "curso_id",
      otherKey: "pessoa_id"
    });
  }
}

export default Curso;
