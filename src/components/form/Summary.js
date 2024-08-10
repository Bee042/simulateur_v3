import { Button } from "@mui/material";
import React from "react";


const Summary = ({ formData, onRestart }) => {
  return (
      <div>
      <h2>Résumé de votre formulaire</h2>
      <p>Âge: {formData.age}</p>
      <p>A déjà un permis: {formData.existingLicense === "true" ? "Oui" : "Non"}</p>
      <p>Permis souhaité : {formData.desiredLicense}</p>
      <p>Est de nationalité française : {formData.isFrench === "true" ? "Oui" : "Non"}</p>
      <p>A un permis de séjour valide : {formData.residentPermit === null ? "Non concerné" : formData.residentPermit === "true" ? "Oui" : "Non"}</p>
      <p>Situation professionnelle : {formData.jobStatus}</p>
      <p>Contrat d'apprentissage : {formData.apprentice === null ? "non concerné" : formData.apprentice === "true" ? "Oui" : "Non"}</p>
      <p>Inscrit à France Travail 6 mois consécutifs : {formData.franceTravail === null ? "Non concerné" : formData.franceTravail === "true" ? "Oui" : "Non"}</p>
      <p>Réserviste Police ou Armée : {formData.reservist === "true" ? "Oui" : "Non"}</p>
      <p>Engagé dans le SNU : {formData.snu === "true" ? "Oui" : "Non"}</p>
      <p>Difficultés d’intégration : {formData.integrationIssues === "true" ? "Oui" : "Non"}</p>
      <p>Situation de handicap : {formData.handicap === "true" ? "Oui" : "Non"}</p>
      <p>Compte Personnel de Formation : {formData.cpf === "true" ? "Oui" : "Non"}</p>
      <p>Accès au crédit bancaire : {formData.credit === "true" ? "Oui" : "Non"}</p>
    
      <Button
        variant="contained"
        color="primary"
        onClick={onRestart} // Appeler la fonction pour réinitialiser
      >
        Recommencer
      </Button>

    </div>
  );
};

export default Summary;
