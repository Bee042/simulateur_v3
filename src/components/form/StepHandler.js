import React from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";


/**
 * * Function that creates an array of all the step components
 * 
 * It takes a parameter object :
 * @param {Object} params.formData : form datas used by the steps  - see Form.js
 * @param {Function} params.setFormData : updates formData  - see Form.js
 * @param {Object} params.errors : contains form validation errors -see Validation.js
 * @param {Function} params.handleChange : handles the form fields changes  - see Form.js
 * @param {Function} params.handleNext : handles moving to next step  - see Form.js
 * @param {Function} params.handlePrev : handles moving to previous step  - see Form.js
 * @param {Function} params.handleSubmit : handles form submission - see Form.js
 * 
 * @returns {Array} : returns an array of all the step components
 */



const getSteps = ({
  formData,
  setFormData,
  errors,
  handleChange,
  handleNext,
  handlePrev,
  handleSubmit,
}) => {
  
  return [
    <Step1
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleChange={handleChange}
      handleNext={handleNext}
    />,
    <Step2
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleChange={handleChange}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <Step3
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleChange={handleChange}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <Step4
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleChange={handleChange}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <Step5
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleChange={handleChange}
      handlePrev={handlePrev}
      handleNext={handleNext}
    />,
    <Step6
      formData={formData}
      setFormData={setFormData}
      errors={errors}
      handleChange={handleChange}
      handlePrev={handlePrev}
      handleSubmit={handleSubmit}
    />,
  ];
};

export default getSteps;
