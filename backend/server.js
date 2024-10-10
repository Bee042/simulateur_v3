const express = require("express"); // Express pour créer le serveur
const app = express(); // Initialisation de l'application Express
const PORT = 3001; // Le port sur lequel le serveur va écouter
const sequelize = require("./config/db"); // Importation de la configuration de la base de données
const authRoutes = require("./routes/auth"); // Importation des routes d'authentification

const cors = require("cors"); // Middleware to handle Cross-Origin Resource Sharing (CORS)
app.use(cors()); // Enable CORS to allow requests from different origins

// Middleware to handle JSON request bodies
// This allows the server to accept requests with JSON payloads
app.use(express.json());

// Use the authentication routes for all requests that start with '/react'
app.use("/react", authRoutes);

// Test route to verify if the server is running correctly
app.get("/", (req, res) => {
  // Sends a response to confirm that the server is operational
  res.send("Le serveur fonctionne !");
});

// Synchronize the models with the database
// Alter true: this will attempt to adjust the database schema to match the models without losing data
sequelize
  .sync({ alter: true })
  .then(() => {
    // successfull synchronization
  })
  .catch((err) => {
    /**
     * If the connection fails:
     * - `throw new Error()` creates a custom error message (instead of console logs)
     * - `err` includes the original error details from Sequelize, giving more information about what went wrong.
     */
    throw new Error(
      "Erreur lors de la synchronisation avec la base de données :",
      err
    );
  });

// Start the server on the specified port
app.listen(PORT, () => {});
