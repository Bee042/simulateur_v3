import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import FormStepper from "../elements/FormStepper";
import getSteps from "./StepHandler";
import Validation from "../utils/Validation";
import Summary from "./Summary";

/************************
 *   DECLARATION
 *   CONST / ETATS
 ***********************/

const defaultFormData = {
  age: "",
  existingLicense: "",
  desiredLicense: "",
  isFrench: "",
  residentPermit: "",
  jobStatus: "",
  apprentice: "",
  franceTravail: "",
  reservist: "",
  snu: "",
  integrationIssues: "",
  handicap: "",
  cpf: "",
  credit: "",
};

const Form = () => {

  const [formData, setFormData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    return savedData || defaultFormData;
  });

  const [errors, setErrors] = useState({});

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("step");
    return savedStep ? parseInt(savedStep, 10) : 1;
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  /************************
   *    USE EFFECT
   ************************/

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    }
  }, [step]);

  /************************
   *      HANDLERS
   ***********************/
  const handleNext = () => {
    localStorage.setItem("formData", JSON.stringify(formData));

    if (!Validation({ step, formData, setErrors })) {
      return;
    }
    setStep((step) => step + 1);
    localStorage.setItem("step", step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
    localStorage.setItem("step", step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      let updatedData = { ...prevData, [name]: value }

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
          franceTravail: value === "sans emploi" ? prevData.franceTravail : null,
        };
      }

      return updatedData
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData));
    setIsSubmitted(true);
  };

  const handleRestart = () => {
    setFormData(defaultFormData);
    setStep(1);
    localStorage.removeItem("formData");
    localStorage.removeItem("step");
    setIsSubmitted(false);
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
   *     RETURN
   ***********************/

  return (
    <Container>
      {isSubmitted ? (
        <Summary
          formData={formData}
          onRestart={handleRestart}
        />
      ) : (
        <>
          <FormStepper step={step} />

          <form>
            {steps[step - 1]}

          </form>
        </>
      )}
    </Container>
  );
};

export default Form;
