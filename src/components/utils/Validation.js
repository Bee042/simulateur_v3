// Fonction de validation pour les champs requis
const requiredValidation = (value) => !value ? "Ce champ est requis." : null;

// Fonction de validation spécifique pour l'âge
const validateAge = (value) =>
  !value || isNaN(value) || value < 15 || value > 99 || value % 1 !== 0
    ? "L'âge doit être un nombre entier entre 15 et 99."
    : null;

// Règles de validation par étape
const validationRules = {
  1: {
    age: validateAge,
    existingLicense: requiredValidation,
    desiredLicense: requiredValidation,
  },
  2: {
    isFrench: requiredValidation,
    residentPermit: (value, formData) =>
      formData.isFrench === "false" ? requiredValidation(value) : null,
  },
  3: {
    jobStatus: requiredValidation,
    apprentice: (value, formData) =>
      formData.jobStatus === "student" ? requiredValidation(value) : null,
    franceTravail: (value, formData) =>
      formData.jobStatus === "unemployed" ? requiredValidation(value) : null,
  },
  4: {
    reservist: requiredValidation,
    snu: requiredValidation,
  },
  5: {
    integrationIssues: requiredValidation,
    handicap: requiredValidation,
  },
  6: {
    cpf: (value) => value ? "Ce champ est requis." : null,
    credit: requiredValidation,
  },
};

// Fonction principale de validation
const Validation = ({ step, formData, setErrors }) => {
  const rules = validationRules[step] || {};
  let tempErrors = {};
  let isValid = true;

  Object.entries(rules).forEach(([field, validate]) => {
    const value = formData[field];
    const errorMessage = validate(value, formData);

    if (errorMessage) {
      tempErrors[field] = errorMessage;
      isValid = false;
    }
  });

  // Gestion du cas spécial pour l'étape 2 : effacer residentPermit si isFrench est false
  if (step === 2 && !formData.isFrench) {
    formData.residentPermit = null;
  }

  setErrors(tempErrors);
  return isValid;
};

export default Validation;
