const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

/**
 ** CREATE THE HELPS TABLE
 * Define the Helps model using Sequelize's define method.
 * This model will represent the 'helps' table in the database, which stores the list of helps (aids) available to users.
 * Each entry in the helps table is associated with a specific user through the 'userId' foreign key.
 */

const Helps = sequelize.define(
  "Helps",
  {
    helpList: {
      type: DataTypes.JSON, // Defines the 'helpList' field as a JSON object - allows storing multiple helps in a structured format, similar to an array or object
      allowNull: false, // Field required, cannot be null
    },

    userId: {
      // foreign key that links the helps to a specific user in the 'users' table
      type: DataTypes.INTEGER, // Defines 'userId' as an integer that links to a user's ID
      references: {
        model: User, // References the User model (which represents the 'users' table)
        key: "id", // Refers to the 'id' column in the 'users' table
      },
      onDelete: "CASCADE", // Automatically deletes helps if the associated user is deleted
      onUpdate: "CASCADE", // Automatically updates the helps if the user's ID changes
    },
  },
  {
    timestamps: true, // Automatically adds 'createdAt' and 'updatedAt' columns to the table
  }
);

module.exports = Helps;
