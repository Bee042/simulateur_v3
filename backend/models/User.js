const { DataTypes } = require('sequelize'); // DataTypes is used to define the type of each field in the model
const sequelize = require('../config/db'); // Import the Sequelize instance, represents the connection to the db


/**
 ** CREATE THE USER TABLE 
 * Define the User model using Sequelize's define method.
 * This model will represent the 'users' table in the db
 * and defines the structure of the table.
 * The model contains two main fields: 'pseudo' and 'email'.
 */

const User = sequelize.define('User', {
  
  pseudo: {
    type: DataTypes.STRING, // Defines the 'pseudo' field as a string (text data)
    allowNull: false // Field required, cannot be null
  },

   /**
   * 'email' is a string field that stores the user's email address.
   * - DataTypes.STRING: Specifies that this field will also store text data (email in this case).
   * - allowNull: false means that the email is required and cannot be empty.
   * - unique: true ensures that every user has a unique email, preventing duplicates in the database.
   */
  email: {
    type: DataTypes.STRING, // Defines the 'email' field as a string, stores the mail of the user
    allowNull: false, // Field  required, cannot be null
    unique: true // Ensures that each email is unique in the database
  }
}, {
  timestamps: true // Automatically adds 'createdAt' and 'updatedAt' columns to the table (fron Sequelize)
});

module.exports = User;
