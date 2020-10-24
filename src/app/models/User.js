import Sequelize, { Model } from "sequelize";

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING
      },
      {
        sequelize
      }
    );

    return User;
  }

  static associate(/* models */) {
    // this.hasOne(models.Detail, {
    //   foreignKey: "user_id",
    //   as: "details"
    // });
  }
}

export default User;
