//const TipoUsuario = require("../../app/models/tipousuario");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tipo_usuarios", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then (()=>{
      queryInterface.insert(null, 'tipo_usuarios', {
        descricao: 'master',
        created_at: new Date(),
        updated_at: new Date()
      });
      queryInterface.insert(null, 'tipo_usuarios', {
        descricao: 'normal',
        created_at: new Date(),
        updated_at: new Date()
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
