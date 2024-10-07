// Importation des modules nécessaires
const { Sequelize } = require('sequelize');

// Création d'une instance Sequelize pour se connecter à la base de données
const sequelize = new Sequelize('bdd_simulateur', 'root', '', {
  host: 'localhost', // Adresse du serveur MySQL (ici en local)
  dialect: 'mysql', // Type de base de données (MySQL)
  logging: false // Désactive les logs SQL pour rendre la console plus lisible
});

// Test de la connexion à la base de données
sequelize.authenticate()
  .then(() => {
    console.log('Connexion à la base de données réussie !');
  })
  .catch(err => {
    console.error('Erreur de connexion à la base de données :', err);
  });

// Exportation de l'instance Sequelize pour l'utiliser dans d'autres fichiers
module.exports = sequelize;
