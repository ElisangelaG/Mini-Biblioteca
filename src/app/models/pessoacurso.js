import DataTypes, { Model } from "sequelize";

class PessoaCurso extends Model {
  static init(sequelize) {
    super.init(
      {
        curso_id: DataTypes.INTEGER,
        pessoa_id: DataTypes.INTEGER
      },
      {
        sequelize
      }
    );

    return PessoaCurso;
  }

  static associate(models) {}
}

export default PessoaCurso;
