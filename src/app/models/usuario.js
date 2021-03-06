import DataTypes, { Model } from "sequelize";

const bcrypt = require("bcrypt");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        email: DataTypes.STRING,
        tipo_usuario_id: DataTypes.INTEGER,
      },
      {
        sequelize,
        hooks: {
          beforeCreate: usuario => {
            usuario.senha = bcrypt.hashSync(usuario.senha, 10);
          }
        }
      }
    );

    return Usuario;
  }

  validarSenha(senha) {
    return bcrypt.compareSync(senha, this.senha);
  }

  static associate(models) {
    this.hasOne(models.TipoUsuario, {
      as: "tipo",
      foreignKey: "id"
    });
    this.belongsTo(models.Pessoa, {
      as: "pessoa",
      foreignKey: "pessoa_id",
    });
  }
}

export default Usuario;
