'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable("area_de_estudo_obras", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    obra_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "obras",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    area_de_estudo_id: {
      type: Sequelize.INTEGER,
      references: {
        model: "area_de_estudos",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL"
    },
    created_at: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updated_at: {
      allowNull: false,
      type: Sequelize.DATE
    }
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
