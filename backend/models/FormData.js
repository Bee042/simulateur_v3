// Importation des modules nécessaires
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User'); // Importation du modèle User pour la relation

// Définition du modèle FormData
const FormData = sequelize.define('FormData', {
  data: {
    type: DataTypes.JSON, // Stockage des données sous forme d'objet JSON
    allowNull: false // Les données ne doivent pas être vides
  },
  userId: {
    type: DataTypes.INTEGER, // Clé étrangère pour faire référence à un utilisateur
    references: {
      model: User, // Le modèle User
      key: 'id' // La clé primaire de la table users
    },
    onDelete: 'CASCADE', // Supprimer les formdata si l'utilisateur est supprimé
    onUpdate: 'CASCADE' // Mettre à jour les formdata si l'utilisateur est mis à jour
  }
}, {
  timestamps: true // Ajoute les colonnes createdAt et updatedAt automatiquement
});

// Exportation du modèle
module.exports = FormData;
