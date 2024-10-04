const express = require('express'); // Import the Express framework
const sequelize = require('./config/db'); // Import the Sequelize database configuration
const User = require('./models/User.js'); // Import the User model
const FormData = require('./models/FormData.js'); // Import the FormData model
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken package
const app = express(); // Create an instance of an Express application

app.use(express.json()); // Middleware to parse JSON request bodies

// Test database connection
sequelize.sync().then(() => { // Synchronize models with the database
  console.log('Database & tables created!'); // Log success message
}).catch(err => console.log(err)); // Log any errors during synchronization

// Middleware to verify the token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get the token from headers

    if (!token) {
        return res.status(403).json({ message: 'Accès non autorisé.' });
    }

    jwt.verify(token, 'secretkey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token invalide.' });
        }
        req.userId = decoded.id; // Store the user ID in the request
        next(); // Proceed to the next middleware
    });
};

// Protected route
app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: 'Accès autorisé.', userId: req.userId });
});

// Start the server
const PORT = process.env.PORT || 3000; // Set the port to the environment variable or default to 3000
app.listen(PORT, () => { // Start listening on the specified port
  console.log(`Server running on port ${PORT}`); // Log server running message
});

// Import routes
const authRoutes = require('./routes/auth');
const formRoutes = require('./routes/form');

// Use routes
app.use('/auth', authRoutes);
app.use('/form', formRoutes); // Route for form data
