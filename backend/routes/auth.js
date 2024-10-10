const express = require("express"); // Express is a web framework for Node.js
const router = express.Router(); // Creating an Express router instance

// Importing the models to interact with the DB tables
const User = require("../models/User");
const FormData = require("../models/FormData");
const Helps = require("../models/Helps");

/**
 ** POST route
 * to register a new user, save their form data, and store the filtered helps.
 * This route is used when a new user submits their data along with the form responses.
 */
router.post("/", async (req, res) => {
  try {
    // Destructuring the request body to extract the pseudo, email, formData, and filteredHelps fields
    const { pseudo, email, formData, filteredHelps } = req.body;

    // If formData is missing, send an error response
    if (!formData) {
      return res
        .status(400)
        .json({ message: "Les données du formulaire sont manquantes." });
    }

    // Check if the user already exists in the database by looking up their email
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res
        .status(400)
        .json({ message: "Cet email est déjà enregistré." });
    }

    // If the user does not exist, create a new user in the database
    const newUser = await User.create({ pseudo, email });

    // Save the form data, linking it to the newly created user by userId
    const newFormData = await FormData.create({
      data: formData, // The form data is saved as a JSON object
      userId: newUser.id, // The foreign key that links the form data to the new user
    });

    // Save the filtered helps (list of aids) as a JSON object in the helps table
    const newHelps = await Helps.create({
      helpList: filteredHelps, // The list of filtered helps is saved as a JSON object
      userId: newUser.id, // The foreign key that links the helps to the new user
    });

    // Send a success response with the newly created user, form data, and helps
    return res.status(201).json({
      message: `Formulaire, utilisateur, et aides créés avec succès pour ${newUser.pseudo}`,
      formData: newFormData,
      helps: newHelps,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Erreur lors de la création des données.",
      error: err.message,
    });
  }
});

/**
 ** GET route 
 * to retrieve a specific user's information by their user ID.
 * This includes both the user's form data and filtered helps.
 */
router.get("/user/:id", async (req, res) => {
  try {
    // Extract the user ID from the request parameters
    const userId = req.params.id;

    // Find the user by their ID, including their form data and helps (associated tables)
    const user = await User.findOne({
      where: { id: userId },
      include: [
        { model: FormData, as: "formData" }, // Include the user's form data
        { model: Helps, as: "helps" }, // Include the user's filtered helps
      ],
    });

    // If the user is not found, send a 404 error response
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }
    // If the user is found, return their data (user, formData, helps)
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({
      message: "Erreur lors de la récupération des données.",
      error: err.message,
    });
  }
});

module.exports = router;
