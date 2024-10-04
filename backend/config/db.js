// Importing the Sequelize constructor from the sequelize package
const { Sequelize } = require('sequelize');

// Creating a new instance of Sequelize to connect to the database
const sequelize = new Sequelize('bdd_simulateur', 'root', '', {
  // Database connection options
  host: 'localhost', // Host where the database is located
  dialect: 'mysql',   // Dialect of the database (MySQL in this case)
});

// Exporting the sequelize instance for use in other parts of the application
module.exports = sequelize;