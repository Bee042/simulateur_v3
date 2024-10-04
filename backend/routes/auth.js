const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Route d'inscription
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        // Vérifier si le nom d'utilisateur est déjà pris
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Nom d\'utilisateur déjà pris.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, password: hashedPassword });
        res.status(201).json({ id: newUser.id, username: newUser.username });
    } catch (error) {
        console.error(error); // Affiche l'erreur dans la console
        res.status(500).json({ message: 'Erreur lors de l\'inscription.', error: error.message });
    }
});

// Route de connexion
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ where: { username } });
        if (!user) return res.status(401).json({ message: 'Utilisateur non trouvé.' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Mot de passe incorrect.' });

        const token = jwt.sign({ id: user.id }, 'secretkey', { expiresIn: '1h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Erreur lors de la connexion.' });
    }
});

module.exports = router;
