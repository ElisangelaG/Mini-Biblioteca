import DataTypes, { Model } from "sequelize";

const bcrypt = require("bcrypt");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        login: DataTypes.STRING,
        senha: DataTypes.STRING,
        email: DataTypes.STRING
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
  }
}

export default Usuario;
