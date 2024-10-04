const express = require('express');
const router = express.Router();
const FormData = require('../models/FormData.js'); // Import the FormData model

// Route pour créer des données de formulaire
router.post('/', async (req, res) => {
    try {
        const formData = await FormData.create(req.body);
        res.status(201).json(formData); // Envoie la donnée créée
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la création des données.' });
    }
});

// Route pour récupérer toutes les données de formulaire
router.get('/', async (req, res) => {
    try {
        const allData = await FormData.findAll(); // Récupérer toutes les données
        res.status(200).json(allData); // Envoie les données récupérées
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération des données.' });
    }
});

// Route pour récupérer une donnée de formulaire par ID
router.get('/:id', async (req, res) => {
    try {
        const formData = await FormData.findByPk(req.params.id); // Récupérer une donnée par ID
        if (!formData) {
            return res.status(404).json({ message: 'Donnée non trouvée.' });
        }
        res.status(200).json(formData); // Envoie la donnée trouvée
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la récupération de la donnée.' });
    }
});

// Route pour mettre à jour une donnée de formulaire par ID
router.put('/:id', async (req, res) => {
    try {
        const formData = await FormData.findByPk(req.params.id); // Récupérer une donnée par ID
        if (!formData) {
            return res.status(404).json({ message: 'Donnée non trouvée.' });
        }
        await formData.update(req.body); // Mettre à jour la donnée avec les nouvelles valeurs
        res.status(200).json(formData); // Envoie la donnée mise à jour
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la mise à jour de la donnée.' });
    }
});

// Route pour supprimer une donnée de formulaire par ID
router.delete('/:id', async (req, res) => {
    try {
        const formData = await FormData.findByPk(req.params.id); // Récupérer une donnée par ID
        if (!formData) {
            return res.status(404).json({ message: 'Donnée non trouvée.' });
        }
        await formData.destroy(); // Supprimer la donnée
        res.status(204).send(); // Envoie un statut 204 No Content pour indiquer que la suppression a réussi
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la suppression de la donnée.' });
    }
});

module.exports = router; // Export the router
