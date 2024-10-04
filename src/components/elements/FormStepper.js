import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";


/**
 *  component that displays a step indicator
 *  it uses the MUI Stepper to show the user on which step he currently is
 *  and the state of the previous steps.
 */


const FormStepper = ({ step, index }) => {

  // variable 'stepperLables' to store an array of the labels for each step of the stepper
  const stepperLabels = [
    "Projet de formation au permis",
    "Situation Administrative",
    "Situation professionnelle",
    "Situation militaire",
    "Situation particulière",
    "Situation financière",
  ];


  return (
    // Box component from MUI to wrap the content wiht style
    <Box
      className="stepper-box"
    >    

    {/* DESKTOP STEPPER */}
      <Stepper
        // ste the current step based on step prop (-1 because steps are index 0 in a MUI Stepper component and our step useState was initialized to 1)
        activeStep={step - 1}    
        // display the label below the steps    
        alternativeLabel              
        className="custom-step-icon stepper-desktop"
      >
        {/* loop over each label of the 'stepperLabels' arrray to create a new step component */}
        {stepperLabels.map((label) => (
          // apply a unique key to each step
          <Step key={label}>
            
            <StepLabel
            // if index of the current step is less than step-1 : empty string (no special style) 
            // Else (:)  apply "custom-disabled-step-label" (make the label look disabled or inactive)
              className = {index < step - 1 ? "" : "custom-disabled-step-label"}
            >
              {/* inject the label into JSX to show it as the step name */}
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

    </Box>
  );
};

export default FormStepper;
