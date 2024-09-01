import React from "react";
import { MobileStepper } from "@mui/material";
// import "../../Display.css";

const StepperMobile = ({ step }) => {
  return (
    <MobileStepper
      variant="dots"
      steps={6}
      position="static"
      activeStep={step - 1}
      className="stepper-mobile"
    />
  );
};

export default StepperMobile;
