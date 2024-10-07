import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios"; // Pour envoyer les requêtes au back-end
import { validateHelps } from "../utils/ValidateHelps";


const Auth = ({ onSuccess }) => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Fonction pour gérer le changement des champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "pseudo") setPseudo(value);
    if (name === "email") setEmail(value);
  };

// Fonction pour gérer la soumission du formulaire
const handleSubmit = async () => {
    try {
      if (!pseudo || !email) {
        setError("Veuillez renseigner le pseudo et l'email.");
        return;
      }
  
      // Récupération des données du localStorage
      const formData = JSON.parse(localStorage.getItem('formData')) || {};
  
      // Calcul des aides filtrées à partir de formData
      const availableHelps = validateHelps(formData);
      const filteredHelps = Object.values(availableHelps).filter(
        (help) => help.display
      );
  
      // Envoi des données au back-end
      const response = await axios.post("http://localhost:3001/react", {
        pseudo,
        email,
        formData, // Les données récupérées du localStorage
        filteredHelps // Envoi des aides filtrées calculées
      });
  
      if (response.status === 201) {
        onSuccess();
      }
    } catch (err) {
      setError("Erreur lors de l'inscription, veuillez réessayer.");
    }
  };
          
  return (
    <Container>
      <h1>Inscription</h1>
      <TextField
        label="Pseudo"
        name="pseudo"
        value={pseudo}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Voir mes aides
      </Button>
    </Container>
  );
};

export default Auth;
