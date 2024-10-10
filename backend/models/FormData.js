const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User"); // Importing the User model to establish the relationship between FormData and User

/**
 ** CREATE THE FORMDATA TABLE 
 * Define the FormData model using Sequelize's define method.
 * This model will represent the 'formdatas' table in the database, which stores form data submitted by users.
 * Each form data entry is associated with a specific user through the 'userId' foreign key.
 */

const FormData = sequelize.define('FormData', {
    data: {
      // field that stores the form data as a JSON object.
      type: DataTypes.JSON, // Defines the 'data' field as a JSON object - allows to store structured data (like form responses) in a single column.
      allowNull: false, // Field required & cannot be null
    },

    userId: {
      // foreign key that links the form data to a specific user in the 'users' table
      type: DataTypes.INTEGER, // Defines/stores 'userId' as an integer that links to a user's ID
      references: {
        model: User, // References the User model (which represents the 'users' table)
        key: "id", // Refers to the 'id' column in the 'users' table
      },
      onDelete: "CASCADE", // Automatically deletes form data if the associated user is deleted
      onUpdate: "CASCADE", // Automatically updates the form data if the user's ID changes
    },
  },
  {
    timestamps: true, // Sequelize Automatically adds 'createdAt' and 'updatedAt' columns to the table
  }
);

module.exports = FormData;
