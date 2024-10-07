// Importation des modules nécessaires
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const FormData = require('../models/FormData');
const Helps = require('../models/Helps'); // Importation du modèle Helps

// Route POST pour l'inscription de l'utilisateur, l'enregistrement du formulaire et des aides
router.post('/', async (req, res) => {
    try {
      // Récupération du pseudo, de l'email et des données du formulaire
      const { pseudo, email, formData, filteredHelps } = req.body;
  
      // Vérification si l'utilisateur existe déjà dans la base de données
      if (!formData) {
        return res.status(400).json({ message: 'Les données du formulaire sont manquantes.' });
      }
  
      // Vérification si l'utilisateur existe déjà dans la base de données
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ message: 'Cet email est déjà enregistré.' });
      }
  
      // Création d'un nouvel utilisateur
      const newUser = await User.create({ pseudo, email });
  
      // Enregistrement des données du formulaire avec la clé étrangère userId
      const newFormData = await FormData.create({
        data: formData, // S'assure que formData est bien présent
        userId: newUser.id // Associe l'ID de l'utilisateur créé
      });
  
      // Enregistrement des aides filtrées sous forme d'objet JSON dans la colonne helpList
      const newHelps = await Helps.create({
        helpList: filteredHelps,
        userId: newUser.id
      });
  
      // Réponse de succès
      return res.status(201).json({
        message: `Formulaire, utilisateur, et aides créés avec succès pour ${newUser.pseudo}`,
        formData: newFormData,
        helps: newHelps
      });
    } catch (err) {
      // Gestion des erreurs
      console.error('Erreur complète:', err);
      return res.status(500).json({ message: 'Erreur lors de la création des données.', error: err.message });
    }
  });router.post('/', async (req, res) => {
    try {
      const { pseudo, email, formData, filteredHelps } = req.body;
  
      // Vérification si l'utilisateur existe déjà
      const userExists = await User.findOne({ where: { email } });
      if (userExists) {
        return res.status(400).json({ message: 'Cet email est déjà enregistré.' });
      }
  
      // Création de l'utilisateur
      const newUser = await User.create({ pseudo, email });
  
      // Sauvegarde des données du formulaire (localStorage) dans la table FormData
      const newFormData = await FormData.create({
        data: formData, // Sauvegarde des données
        userId: newUser.id
      });
  
      // Sauvegarde des aides filtrées
      const newHelps = await Helps.create({
        helpList: filteredHelps,
        userId: newUser.id
      });
  
      return res.status(201).json({
        message: `Formulaire, utilisateur, et aides créés avec succès pour ${newUser.pseudo}`,
        formData: newFormData,
        helps: newHelps
      });
    } catch (err) {
      console.error('Erreur complète:', err);
      return res.status(500).json({ message: 'Erreur lors de la création des données.', error: err.message });
    }
    
  });
  
    

// Route GET pour récupérer les informations d'un utilisateur spécifique par ID
router.get('/user/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const user = await User.findOne({
            where: { id: userId },
            include: [
                { model: FormData, as: 'formData' }, // Inclure les données du formulaire
                { model: Helps, as: 'helps' } // Inclure les aides filtrées
            ]
        });

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé.' });
        }

        return res.status(200).json(user);
    } catch (err) {
        console.error('Erreur complète:', err);
        return res.status(500).json({ message: 'Erreur lors de la récupération des données.', error: err.message });
    }
});

// Exportation du routeur
module.exports = router;
