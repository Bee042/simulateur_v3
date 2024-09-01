import React from "react";
import { RestartButton } from "../elements/FormButtons";
import { displayHelps } from "../utils/ValidateHelps";

const Summary = ({ formData, onRestart, step, steps, helps }) => {
  return (
    <>
      {/* <h2>Résumé de votre formulaire</h2> */}
      {/* <p>A déjà un permis valide: {formData.validLicenseAorB === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Permis souhaité : {formData.desiredLicense}</p> */}
      {/* <p>Déjà inscrit au permis : {formData.alreadyTraining === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Première inscription : {formData.firstSubscription === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Inscription initiale : {formData.initalTraining === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Permis nécessaire à un projet professionnel : {formData.necessaryForProfessionalProject === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Âge: {formData.age}</p> */}
      {/* <p>Est de nationalité française : {formData.isFrench === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>A un permis de séjour valide : {formData.residentPermit === null ? "Non concerné" : formData.residentPermit === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Situation professionnelle : {formData.jobStatus}</p> */}
      {/* <p>Contrat d'apprentissage : {formData.apprentice === null ? "Non concerné" : formData.apprentice === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Formation professionnelle : {formData.professionalTraining === null ? "Non concerné" : formData.professionalTraining === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Inscrit à France Travail 6 mois consécutifs : {formData.registeredToFranceTravailFor6months === null ? "Non concerné" : formData.registeredToFranceTravailFor6months === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Réserviste Police ou Armée : {formData.reservist === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>A déjà eu le permis B : {formData.everHadBLicense === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>A effectué 50 jours dans la réserve : {formData.daysReserve === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Est à plus de 2 ans de la fin d'engagement : {formData.endOfContract === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>A un justificatif d'inscription en auto école : {formData.trainingProof === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Engagé dans le SNU : {formData.snu === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Difficultés d’intégration : {formData.integrationIssues === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Situation de handicap : {formData.handicap === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Compte Personnel de Formation : {formData.cpf === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Disposez-vous de faibles ressources : {formData.lowIncomes === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Revenus sociaux : {formData.socialIncome === "true" ? "Oui" : "Non"}</p> */}
      {/* <p>Accès au crédit bancaire : {formData.creditAccess === "true" ? "Oui" : "Non"}</p> */}
      


      <div className="display-container">
        <div className="title-banner">
          <h1>Aides auxquelles vous pourriez prétendre :</h1>
        </div>

        <h4>
          Certaines aides sont cumulables, renseignez-vous auprès de nos
          conseillers
        </h4>
        {displayHelps(helps)}

      <div>
        <RestartButton
          onClick={onRestart}
          disabled={steps ? step === steps.length : false}
        />
      </div>

</div>

    </>
  );
};

export default Summary;
