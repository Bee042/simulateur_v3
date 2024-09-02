import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import FormStepper from "../elements/FormStepper";
import getSteps from "./StepHandler";
import Validation from "../utils/Validation";
import Summary from "./Summary";
import { validateHelps } from "../utils/ValidateHelps";
import StepperMobile from "../elements/MobileStepper";
import "../../Style.css";


/************************
 *   DECLARATION
 *   CONST / ETATS
 ***********************/

// Default values of the form fields
const defaultFormData = {
  age: "",
  alreadyTraining: "",
  apprentice: "",
  cpf: "",
  creditAccess: "",
  desiredLicense: "",
  handicap: "",
  initalTraining: "",
  isFrench: "",
  integrationIssues: "",
  jobStatus: "",
  lowIncomes: "",
  necessaryForProfessionalProject: "",
  residentPermit: "",
  registeredToFranceTravailFor6months: "",
  reservist: "",
  snu: "",
  socialIncome: "",
  validLicenseAorB: "",
};

const Form = () => {

  /************************
  //*    DECLARATION DES
  //*    CONST / VAR
   ************************/

  // 
  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    return savedData || defaultFormData;
  });

  const [errors, setErrors] = useState({});

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("step");
    return savedStep ? parseInt(savedStep, 10) : 1;
  });

  // const [isSubmitted, setIsSubmitted] = useState(false);
  let isSubmitted = false;
  const alreadySubmitted = localStorage.getItem("submitted");
  if (alreadySubmitted) {
    isSubmitted = true
  }

  const [helps, setHelps] = useState({});

  /************************
  // *    USE EFFECT
   ************************/

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, [step]);

  /************************
  // *    HANDLERS
   ***********************/

  //*_________ HANDLENEXT
  // Valide l'étape après vérif d'erreurs + enregistre datas + steps dans localstorage

  const handleNext = () => {
    if (Validation({ step, formData, setErrors })) {
      // console.log("log handlenext"      ,Validation({ step, formData, setErrors }));
      setStep((prevStep) => {
        const newStep = prevStep + 1;

        localStorage.setItem("step", newStep);
        localStorage.setItem("formData", JSON.stringify(formData));

        return newStep;
      });
    } else {
      console.log("validation failed");
    }
  };

  //*_________ HANDLEPREV
  // Retourne à l'étape précédente, met à jour le step dans localstorage

  const handlePrev = () => {
    setStep(step - 1);
    localStorage.setItem("step", step - 1);
  };

  //*_________ HANDLECHANGE
  // Mise à jour des saisies dans les champs

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      let updatedData = { ...prevData, [name]: value };

      if (name === "isFrench") {
        updatedData = {
          ...updatedData,
          residentPermit: value === "true" ? null : prevData.residentPermit,
        };
      }

      if (name === "jobStatus") {
        updatedData = {
          ...updatedData,
          apprentice: value === "étudiant.e" ? prevData.apprentice : null,
          registeredToFranceTravailFor6months:
            value === "sans emploi" ? prevData.registeredToFranceTravailFor6months : null,
        };
      }
      return updatedData;
    });
  };

  //*_________ HANDLESUBMIT
  // Valide le formulaire
  // + affiche le résumé des données saisies par l'utilisateur
  // + affiche les aides disponibles

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    const availableHelps = validateHelps(formData);
    setHelps(availableHelps);

    isSubmitted = true
    localStorage.setItem("submitted", "true");
  };

  //*_________ HANDLERESTART
  // Retour step 1 avec champs et localstorage cleared

  const handleRestart = () => {
    setFormData(defaultFormData);
    setStep(1);
    localStorage.removeItem("formData");
    localStorage.removeItem("step");
    localStorage.removeItem("submitted");
    // isSubmitted = false;
  };

  const steps = getSteps({
    formData,
    setFormData,
    errors,
    handleChange,
    handleNext,
    handlePrev,
    handleSubmit,
  });

  /************************
  //*     RETURN
   ***********************/

  return (
    <Container className="display-container">
      {isSubmitted ? (
        <Summary 
        formData={formData} 
        helps={helps} 
        onRestart={handleRestart} />
      ) : (
        <>
          <div className="title-banner">
            <h1>Découvrez les aides dont vous pourriez bénéficier <br/>
            pour financer votre permis de conduire</h1>
          </div>

          <form>
            <FormStepper step={step} />

            {steps[step - 1]}
          </form>
          <StepperMobile step={step} />
        </>
      )}
    </Container>
  );
};

export default Form;
