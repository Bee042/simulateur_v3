const { Sequelize } = require("sequelize");

/**
 ** Creating a Sequelize instance to connect to the MySQL database
 * Sequelize abstracts SQL queries into JS methods, streamlining database interactions.
 * It manages model definitions, relationships, and data validation while offering easy
 * cross-database compatibility. Additionally, Sequelize handles schema synchronization,
 * ensuring the DB stays in sync with model changes.
 */
const sequelize = new Sequelize("bdd_simulateur", "root", "", {
  host: "localhost", // Host where MySQL server is running (localhost)
  dialect: "mysql", // Type of database used (MySQL)
  logging: false, // Disables SQL query logs for cleaner console output
});


/**
 ** Testing connection to DB
 */ 
sequelize
  .authenticate()
  .then(() => {
    // Connection successful
  })
  .catch((err) => {
    /**
     * If the connection fails:
     * - `throw new Error()` creates a custom error message (instead of console logs)
     * - `err` includes the original error details from Sequelize, giving more information about what went wrong.
     */
    throw new Error("Echec de connexion à la base de données :", err);
  });



module.exports = sequelize;