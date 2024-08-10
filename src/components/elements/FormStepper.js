import React from "react";
import { Box, Step, StepLabel, Stepper } from "@mui/material";

const FormStepper = ({ step }) => {
  const stepperLabels = [
    "Étape 1: Informations personnelles",
    "Étape 2: Situation Administrative",
    "Étape 3: Situation professionnelle",
    "Étape 4: Situation militaire",
    "Étape 5: Situation particulière",
    "Étape 6: Situation financière",
  ];

  return (
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step - 1} alternativeLabel>
          {stepperLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
  );
};

export default FormStepper;
