const { DataTypes } = require('sequelize'); // Import DataTypes from sequelize for defining model attributes
const sequelize = require('../config/db'); // Import the sequelize instance configured with the database

// Define a new model called 'FormData' using sequelize
const FormData = sequelize.define('FormData', {
  field1: {
    type: DataTypes.STRING, // Define 'field1' as a string type
    allowNull: false, // 'field1' cannot be null
  },
  // Add other fields corresponding to the form data
});

// Export the FormData model for use in other parts of the application
module.exports = FormData;