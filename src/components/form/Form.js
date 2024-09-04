import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import FormStepper from "../elements/FormStepper";
import getSteps from "./StepHandler";
import Validation from "../utils/Validation";
import HelpDisplay from "./HelpDisplay";
import { validateHelps } from "../utils/ValidateHelps";
import StepperMobile from "../elements/MobileStepper";
import "../../Style.css";


/**********************************
 ** DECLARATION VARIABLES / STATES
 *********************************/

/**
 * object that initializez all form fields with empty values :
 * to prevent errors with undefined or null values
 */
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

  /***********************************
   ** INITIALISATION CONST / STATES
  ***********************************/

  /**
   ** Initialize the variable state 'formData' and the function 'setFormData' to update it  
   *  It first tries to load saved datas from localStorage
   *  If no data found in localStorage, it uses default values
  */
  const [formData, setFormData] = useState(() => {
    // creates a variable to store the datas found in localStorage and converts the JSON strings to a JS object
    const savedData = JSON.parse(localStorage.getItem("formData"));
    // if there are datas saved in localStorage, use them || otherwise use default values
    return savedData || defaultFormData;
  });

  /**
   ** Initialize the variable state 'step' to track the current step
   *  Try to load the saved step in localStorage, converts it into integer
   *  If no step found : use first step by default
  */
  const [step, setStep] = useState(() => {
    const savedStep = localStorage.getItem("step");
    // if a step is saved parseInt converts it into integer (:) otherwise set it to 1
    return savedStep ? parseInt(savedStep, 10) : 1;
  });
  
  // Create a variable 'isSubmitted' and initialize it to 'false' meaning the form is not submitted yet
  let isSubmitted = false;
  // Try to get an existant statut of the form from localStorage and store it in a variable 'alreadySubmitted'
  const alreadySubmitted = localStorage.getItem("submitted");
  // If a status submitted is saved in localStorage : set 'alreadySubmitted' to true
  if (alreadySubmitted) {
    // set to true = allows to go to HelpDisplay.js and displays the available helps
    isSubmitted = true
  }
  
  /**
   ** Initializing states for erros and helps
   *  see Validation.js and ValidateHelp;js 
   */
  const [errors, setErrors] = useState({});
  const [helps, setHelps] = useState({});




  /************************
   **   USE EFFECT HOOK
  ************************/

  /**
   * UseEffect runs the function to get the datas from localStorage
   * - when the component renders
   * - or when its dependancies change (step)
   */

  useEffect(() => {
    // try to get the saved form datas from localStorage and converts the JSON string into a JS usable object
    // and store it in a variable 'savedData'
    const savedData = JSON.parse(localStorage.getItem("formData"));
    // check : if datas are saved in localStorage
    if (savedData) {
      // 'setFormData' updates de 'formData' state with the 'savedData' found in localStorage
      setFormData(savedData);
    }
      // array of dependancy : makes the useEffect run only and each time 'step' is changing
  }, [step]);



  /************************
  // *    HANDLERS
   ***********************/

  //*_________ HANDLENEXT
  /**
   * Function to move to next step of the form after validation of the current step datas
   * If datas are valid :
   * - the step is updated
   * - current step and form datas are saved in localStorage
   */

  const handleNext = () => {
    // Calls the  Validation function to be sure the datas of the current step are correct before going on
    // (see 'Validation.js')
    // Parameters passed to the function :
    // - step (to know what is the current step,
    // - formData (to let the function check the needed field)
    // - setErrors (to update and display errors)
    // if the Validation is successful :  :

    if (Validation({ step, formData, setErrors })) {

      // 'setStep' updates the 'step' state
      // it takes another function for argument,
      // the callback function takes as argument the previous value of 'step' : 'prevStep'  (callback function)
      setStep((prevStep) => {
        // that increments the current step of 1 and stores the number in the variable 'newStep'
        const newStep = prevStep + 1;

        // saves the updated step in localStorage with 'setItem' under the key "step"
        localStorage.setItem("step", newStep);
        // saves the current form datas in localStorage  under the key "formData" and convert to JSON string
        localStorage.setItem("formData", JSON.stringify(formData));

        // the callback function returns the new step value ('newStep') that is used to update the 'step' state
        return newStep;
      });
      // if validation fails : log a message in the console
    } else {
      console.log("validation failed");
    }
  };




  //*_________ HANDLEPREV
  /**
   * Function to go back to the previous step of the form
   */

  const handlePrev = () => {
    // calculates the new value of the current step by decrementing of 1
    // then, 'setStep' function updates the 'step' state with the new step value
    setStep(step - 1);
    // and store it in the localStorage
    // step -1 is the new value to be saved
    localStorage.setItem("step", step - 1);
  };





  //*_________ HANDLECHANGE
  /**
   * Function to handle the changes in the fields of the form (when the user interacts)
   * It is automatically called by React when the value of a field changes
   */

  const handleChange = (e) => {
    // targets the input where the changes occured, 
    // and extract the name of the field and its (new) value 
    const { name, value } = e.target;

    // updates te formData with this new value
    setFormData((prevData) => {
      // creates a variable object 'updatedData' based on the previous formData
      // the spread copies all properties from 'prevData' into "updatedData"
      // and updates the property [name] with the new value
      let updatedData = { ...prevData, [name]: value };

      // if the change occurs in the field 'isFrench' :
      if (name === "isFrench") {
        // use the variable to create a new object that copies everything from 'updatedData'
        updatedData = {
          ...updatedData,
          // and if the new value of isFrench is 'true' set residentPermis to null (:) otherwise keep its previous value
          // this clears 'reisdentPermit' if the user switches 'isFrench' from 'false' to 'true' again
          residentPermit: value === "true" ? null : prevData.residentPermit,
        };
      }


      // it the change occures in the field 'jobStatus'
      if (name === "jobStatus") {
        updatedData = {
          ...updatedData,
          // If the selected job status is "étudiant.e", keep current value of 'apprentice'
          // if not: set the value to null
          apprentice: value === "étudiant.e" ? prevData.apprentice : null,
          // If the selected job status is "sans emploi", keep current value of 'registeredToFranceTravailFor6months'
          // if not: set the value to null
          registeredToFranceTravailFor6months:
            value === "sans emploi" ? prevData.registeredToFranceTravailFor6months : null,
        };
      }
      // returns the updated datas to apply changes in the 'formData' state
      return updatedData;
    });
  };



  //*_________ HANDLESUBMIT
  /**
   * Handle the submission of the form  :
   * - save the current form datas to localStorage
   * - validate the form datas to determine the option to display
   * - update the helps state with the available helps
   * - declare the form as submitted and save the submitted status in localStorage
   * 
   * purpose : go to HelpDisplay.js 
   */

  const handleSubmit = () => {
    // save the current form datas as JSON string in localStorage under the key "formData"
    localStorage.setItem("formData", JSON.stringify(formData));

    // Validate the form datas to determine which helps are available for the user, based on his answers
    // call the validateHelps function (see VaildateHelps.js)
    // store the helps in a const 'availableHelps'
    const availableHelps = validateHelps(formData);
    // update the 'Helps' state with the list of available helps
    setHelps(availableHelps);

    // declare the form as submitted by turning the value to "true"
    isSubmitted = true
    // save the submission status in the localStorage
    localStorage.setItem("submitted", "true");
  };



  //*_________ HANDLERESTART
  /**
   * Reset the form to the initial state
   * Clears all the datas stored in localStorage
   * Resets the form step to 1
   */

  const handleRestart = () => {
    // set the formData to their default value
    setFormData(defaultFormData);
    // set the step value to 1
    setStep(1);
    // remove formData, step and submitted values from the localStorage
    localStorage.removeItem("formData");
    localStorage.removeItem("step");
    localStorage.removeItem("submitted");
  };


  // call the getSteps function (see StepHandler.js) that returns an aray of the step components
  // the returned array is stored in a 'steps' variable which is used in the return of form
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

/**
 * Renders the results depending if the form is submitted or not
 */


  return (
    <Container className="display-container">

      {/* If the form is submitted : show the HelpDisplay component
      that shows the available helps and the restart button*/}
      {isSubmitted ? (
        <HelpDisplay 
        formData={formData} // pass the datas to HelpDisplay
        helps={helps}  // pass the object of available helps
        onRestart={handleRestart} // function to restart the form
        />
      ) : (

        //  if the form is not submitted : show the form and navidation components
        <>
          <div className="title-banner">
            <h1>Découvrez les aides dont vous pourriez bénéficier <br/>
            pour financer votre permis de conduire</h1>
          </div>

          {/* display the form */}
          <form>
            <FormStepper step={step} />
          {/* renders the current step based on the step index in 'steps' array */}
            {steps[step - 1]}
          </form>

          {/* display the StepperMobile component if screen <900px */}
          <StepperMobile step={step} />
        </>
      )}
    </Container>
  );
};

export default Form;
