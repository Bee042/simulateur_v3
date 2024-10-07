// Importation des modules nécessaires
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Définition du modèle User
const User = sequelize.define('User', {
  pseudo: {
    type: DataTypes.STRING, // Chaîne de caractères pour stocker le pseudo
    allowNull: false // Le pseudo ne doit pas être vide
  },
  email: {
    type: DataTypes.STRING, // Chaîne de caractères pour stocker l'email
    allowNull: false, // L'email ne doit pas être vide
    unique: true // L'email doit être unique dans la base de données
  }
}, {
  timestamps: true // Ajoute les colonnes createdAt et updatedAt automatiquement
});

// Exportation du modèle pour pouvoir l'utiliser dans d'autres fichiers
module.exports = User;
