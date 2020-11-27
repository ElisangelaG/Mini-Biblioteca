module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("obras", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "usuarios",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      },
      titulo: {
        type: Sequelize.STRING
      },
      data_insercao: {
        type: Sequelize.DATE
      },
      arquivo: {
        type: Sequelize.STRING
      },
      publicacao: {
        type: Sequelize.STRING
      },
      cidade_publicacao: {
        type: Sequelize.STRING
      },
      congresso: {
        type: Sequelize.STRING
      },
      revista: {
        type: Sequelize.STRING
      },
      doi: {
        type: Sequelize.STRING
      },
      issn: {
        type: Sequelize.STRING
      },
      isbn: {
        type: Sequelize.STRING
      },
      resumo: {
        type: Sequelize.TEXT
      },
      tipo_obra_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "tipo_obras",
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
    return queryInterface.dropTable("obras");
  }
};
