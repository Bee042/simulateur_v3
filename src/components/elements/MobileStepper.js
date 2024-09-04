import React from "react";
import { MobileStepper } from "@mui/material";

/**
 * Component that displays a step indicator for mobile devices.
 * It uses the MUI MobileStepper to show the current step of the process with dots to show the current position
 */

const StepperMobile = ({ step }) => {
  return (
    // render the MobileStepper component from MUI
    <MobileStepper
      variant="dots"
      steps={6}                   // specifies the total number of steps
      position="static"           // position of the stepper statid (does not scroll with the content)
      activeStep={step - 1}       // Set the current active step (1-based 'step' prop converted to 0-based by removing 1)
      className="stepper-mobile"  // apply custome styling
    />
  );
};

export default StepperMobile;
