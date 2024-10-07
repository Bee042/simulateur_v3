// Importation des modules nécessaires
const express = require('express'); // Express pour créer le serveur
const app = express(); // Initialisation de l'application Express
const PORT = 3001; // Le port sur lequel le serveur va écouter
const sequelize = require('./config/db'); // Importation de la configuration de la base de données
const authRoutes = require('./routes/auth'); // Importation des routes d'authentification


// Importation des modèles
// const User = require('./models/User');
// const FormData = require('./models/FormData');
// const Helps = require('./models/Helps');

const cors = require('cors'); // Importation du middleware CORS
app.use(cors()); // Utilisation de CORS pour autoriser les requêtes cross-origin

// Middleware pour traiter les données JSON
app.use(express.json()); // Cela permet au serveur d'accepter les requêtes au format JSON

app.use('/react', authRoutes); // Toutes les routes d'authentification commenceront par /auth


// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Le serveur fonctionne !'); // Envoie une réponse pour confirmer que le serveur tourne
});

// Synchronisation des modèles avec la base de données
sequelize.sync() // Ceci synchronise la base de données et lit la variable sequelize
  .then(() => {
    console.log('La synchronisation avec la base de données a réussi.');
  })
  .catch(err => {
    console.error('Erreur lors de la synchronisation avec la base de données :', err);
  });

// Lancement du serveur sur le port spécifié
app.listen(PORT, () => {
  console.log(`Le serveur est démarré et écoute sur le port ${PORT}`); // Message dans le terminal pour dire que le serveur fonctionne
});
