/**
 **  REQUIRED FIELDS
 *  function to make sure that the requierd fields are not empty
 *  it takes the argument 'value' (content of the field)
 *  and check if it is valid
 */
const requiredValidation = (value) => 
  // if value is empty : 
  !value ? 
  // return an error message OTHERWISE return nothing               
  "Ce champ est requis." : null;




/**
 ** AGE VALIDATION 
 *  function to make sure that the age value is valid according to specific criteria
 */
const validateAge = (value) =>
  !value ||         // if the value is empty
  isNaN(value) ||   // or if the value is not a number
  value < 15 ||     // or if the age is under 15
  value > 99 ||     // or if the age is over 99
  value % 1 !== 0   // or if it is not a integer (modulo : makes sure it's an integer)
  //THEN returns this message
    ? "L'âge doit être compris entre 15 et 99 ans"
  //OTHERWISE returns nothing
    : null;




/**
 ** VALIDATION RULES STEP BY STEP
 *  validation logic of the multistep form
 *  each step has different fields taht need to be validated with specific rules
 */
const validationRules = {
  1: {
    desiredLicense: requiredValidation,
    validLicenseAorB: requiredValidation,
    alreadyTraining: requiredValidation,
    necessaryForProfessionalProject: requiredValidation,
    initalTraining: requiredValidation,
  },
  2: {
    age: validateAge,
    isFrench: requiredValidation,
            // conditional situation :
    residentPermit: (value, formData) =>
      // IF the value of formData.isFrench is false
      formData.isFrench === "false" ?
      // THEN check if the value of residentPermit is filled
      // IF not provided : return the error message
      requiredValidation(value)
      // OTHERWISE return nothing
      : null,
  },
  3: {
    jobStatus: requiredValidation,
    apprentice: (value, formData) =>
      formData.jobStatus === "student" ? requiredValidation(value) : null,
    registered6MonthsFranceTravail: (value, formData) =>
      formData.jobStatus === "unemployed" ? requiredValidation(value) : null,
  },
  4: {
    snu: requiredValidation,
    reservist: (value, formData) =>
      formData.reservist === "reservist" ? requiredValidation(value) : null,
  },
  5: {
    integrationIssues: requiredValidation,
    handicap: requiredValidation,
  },
  6: {
    cpf: requiredValidation,
    lowIncomes: requiredValidation,
    creditAccess: requiredValidation,
    socialIncome:requiredValidation,
  },
};



/**
 ** VALIDATION 
 * This function validates the form data based on the current step validation rules :
 * - gets the validation rules for the current step
 * - applies them to the form datas,
 * - collects the validation errors, 
 * - and updates the error state.
 * - It also handles special cases for certain steps (like clearing specific fields)
 */


const Validation = ({ step, formData, setErrors }) => {

  // declare a variable 'rules' and assign the value found in 'validationRules' using the current 'step' as a key
  // IF validationRules does not exist, use an empty set of rules instead
  const rules = validationRules[step] || {};

  // declare a variable 'tempErrors' with let (can be changed further) and assign an empty object
  let tempErrors = {};

  // delcare a variable 'isValid' and initialize the value to 'true' 
  let isValid = true;

  /**
   * method JS Object to converts the rules object into an array of pairs '[field, validate]'
   * for each [field, validate] pair :
   * - get the value of the current field,
   * - apply the Validate function to the field value and the formdata to check if there is an error
   * - if an error message is return : store it in the 'tempErrors' object and set 'isValid' to 'false'
   */
  Object.entries(rules).forEach(([field, validate]) => {
    // declares a variable 'value' to store the current field value from the formData object
    const value = formData[field];
    // declares a variable 'errorMessage' to strore the result of the 'validate' function with its 'value' and the 'formData'
    const errorMessage = validate(value, formData);

    if (errorMessage) {
      tempErrors[field] = errorMessage;
      isValid = false;
    }
  });

  // Check IF the current step is EQUAL (===) to 2 AND (&&) the user is not french (formData.isFrench is false)
  if (step === 2 && !formData.isFrench) {
    // IF BOTH conditions are true THEN set the 'residentPermit' in 'formData' to 'null' (clears any value existing)
    formData.residentPermit = null;
  }

  // update of the 'Errors' state with the current object of errors
  setErrors(tempErrors);

  // return the boolean value of the variable 'isValid' to indicate if the form is valid or not
  return isValid;
};

export default Validation;
