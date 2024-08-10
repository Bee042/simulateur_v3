  //Validation des étapes / gestion des erreurs
//TODO: message erreur dynamique

const Validation = ({step, formData, setErrors}) => {
    let tempErrors = {}; // stockage des erreurs de validation
//TODO : passer isValid à false par défaut
    let isValid = true;

    if (step === 1) {
      if (
        !formData.age ||
        isNaN(formData.age) ||
        formData.age < 15 ||
        formData.age > 99 ||
        formData.age % 1 !== 0
      ) {
        tempErrors.age = "L'âge doit être un nombre entier entre 15 et 99.";
        isValid = false;
      }
      if (!formData.existingLicense) {
        tempErrors.existingLicense = "Ce champ est requis.";
        isValid = false;
      }
      if (!formData.desiredLicense) {
        tempErrors.desiredLicense = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 2) {
      if (!formData.isFrench) {
        tempErrors.isF2ench = "Ce champ est requis.";
        formData.residentPermit=null;
        isValid = false;
      }
      if (formData.isFrench === "false" && !formData.residentPermit) {
        tempErrors.residentPermit = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 3) {
      if (!formData.jobStatus) {
        tempErrors.jobStatus = "Ce champ est requis.";
        isValid = false;
      }
      if (formData.jobStatus === "student" && !formData.apprentice) {
        tempErrors.apprentice = "Ce champ est requis.";
        isValid = false;
      }
      if (formData.jobStatus === "unemployed" && !formData.franceTravail) {
        tempErrors.franceTravail = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 4) {
      if (!formData.reservist) {
        tempErrors.reservist = "Ce champ est requis.";
        isValid = false;
      }
      if (!formData.snu) {
        tempErrors.snu = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 5) {
      if (!formData.integrationIssues) {
        tempErrors.integrationIssues = "Ce champ est requis.";
        isValid = false;
      }
      if (!formData.handicap) {
        tempErrors.handicap = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 6) {
      if (formData.cpf) {
        tempErrors.cpf = "Ce champ est requis.";
        isValid = false;
      }
      if (!formData.credit) {
        tempErrors.credit = "Ce champ est requis.";
        isValid = false;
      }
    }

    setErrors(tempErrors); // Affiche les erreurs trouvées lors de la validation
    // console.log("Validate - erreurs : ", tempErrors);
    return isValid;
  };

  export default Validation;