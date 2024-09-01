import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

// import "../../Display.css";

const FormStepper = ({ step, index }) => {
  const stepperLabels = [
    "Projet de formation au permis",
    "Situation Administrative",
    "Situation professionnelle",
    "Situation militaire",
    "Situation particulière",
    "Situation financière",
  ];

  return (
    <Box
      className="stepper-box"
    >    

    {/* DESKTOP STEPPER */}
      <Stepper
        activeStep={step - 1}
        alternativeLabel
        className="custom-step-icon stepper-desktop"
      >
        {stepperLabels.map((label) => (
          <Step key={label}>
            <StepLabel
              className = {index < step - 1 ? "" : "custom-disabled-step-label"}
            >
              {label}
            </StepLabel>{" "}
          </Step>
        ))}
      </Stepper>

    </Box>
  );
};

export default FormStepper;
