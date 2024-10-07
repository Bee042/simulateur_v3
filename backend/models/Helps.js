// Importation des modules nécessaires
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); // Importation du modèle User pour la relation

// Définition du modèle Helps
const Helps = sequelize.define('Helps', {
  helpList: {
    type: DataTypes.JSON, // Stockage des aides sous forme d'objet JSON
    allowNull: false // Les aides ne doivent pas être vides
  },
  userId: {
    type: DataTypes.INTEGER, // Clé étrangère pour faire référence à un utilisateur
    references: {
      model: User, // Le modèle User
      key: 'id' // La clé primaire de la table users
    },
    onDelete: 'CASCADE', // Supprimer les aides si l'utilisateur est supprimé
    onUpdate: 'CASCADE' // Mettre à jour les aides si l'utilisateur est mis à jour
  }
}, {
  timestamps: true // Ajoute les colonnes createdAt et updatedAt automatiquement
});

// Exportation du modèle Helps
module.exports = Helps;
