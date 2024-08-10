import React, { useEffect, useState } from "react";
import { Button, Container } from "@mui/material";
import FormStepper from "../elements/FormStepper";
import getSteps from "./StepHandler";
import Validation from "../utils/Validation";
import Summary from "./Summary";


const Form = () => {

  /************************
   *   DECLARATION
   *   CONST / ETATS
   ***********************/

  const [formData, setFormData] = useState({
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
  });

  const [errors, setErrors] = useState({});

  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("step");
    return savedStep ? parseInt(savedStep, 10) : 1;
  });
  
  const [isSubmitted, setIsSubmited] = useState(false);



  /************************
   *    USE EFFECT
   ************************/

  useEffect(() => {
    // console.log("useEffect - step", step);
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData); // Affiche les données récupérées du localStorage
    }
  }, [step]);



  /************************
   *      HANDLERS
   ***********************/

  //*____ handleNext ____ Passage à l'étape suivante
  
  //FIXME : la validation ira dans handleChange
  const handleNext = () => {
    // Affiche les données sauvegardées dans le localStorage
    localStorage.setItem("formData", JSON.stringify(formData));
    // si validation échouée : rester à l'étape en cours
    if (!Validation({ step, formData, setErrors })) {
      // console.log("handleNext - echec validation - reste à l'etape :", step);
      return;
    }
    // MAJ de la valeur du step
    setStep((step) => step + 1);
    //Sauvegarde du step
    localStorage.setItem("step", step + 1);
  };


  //*____ handlePrev ____ Retour à l'étape précédente

  const handlePrev = () => {
    setStep(step - 1);
    console.log(step);
    localStorage.setItem("step", step - 1);
  };


  //*____ handleChange ____ Gestion saisies dans inputs
    // fonction appelée à chaque fois que l'utilisateur saisit une donnée dans un champs
  const handleChange = (e) => {
    // on extrait name + value à partir de l'évènement déclenché par la saisie
    const { name, value } = e.target;
    // console.log(name, value);

    // Ici, on veut mettre à jour l(objet (formData)qui contient toutes les données du formulaire
    // On ne veut pas écraser toutes les datas dans l'objet, mais juste mettre à jour la valeur du champ
    // "prevData" = l'état actuel de la variable globale formData au moment de l'appel de la fonction
    // "[name]: value" met à jour seulement le champ spécifique que l'utilisateur est en train de modifier.
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  //*____ handleSubmit ____ Validation du formulaire

  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData)); // sauvegarder les datas avant de les récupérer
    setIsSubmited(true);
  };

    //*____ handleRestart ____ Recommencer le formulaire à zéro
  const handleRestart = () => {
    setFormData({
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
    });
    setStep(1);
    localStorage.removeItem("formData");
    localStorage.removeItem("step");
    setIsSubmited(false);
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
  // console.log(steps.length);


  /************************
   *     RETURN
   ***********************/

  return (
    <Container>
      {isSubmitted ? (
        <Summary
          formData={formData}
          onRestart={handleRestart} // Passer une fonction pour réinitialiser
        />
      ) : (
        <>
          <FormStepper step={step} />
          
          <form>
            {steps[step - 1]}

            {step === steps.length && (
            <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit} // Soumettre le formulaire
            disabled={!formData.cpf || !formData.credit}
          >
            Valider
          </Button>

            )}
          </form>
        </>
      )}
    </Container>
  );
};
export default Form;
