module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable("obras", {
      id: Sequelize.INTEGER,
      titulo: Sequelize.STRING,
      ano: Sequelize.DATE,
      arquivo: Sequelize.STRING,
      publicacao: Sequelize.DATE,
      cidade_publicacao: Sequelize.STRING,
      congresso: Sequelize.STRING,
      revista: Sequelize.STRING,
      doi: Sequelize.STRING,
      issn: Sequelize.STRING,
      isbn: Sequelize.STRING,
      resumo: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
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
