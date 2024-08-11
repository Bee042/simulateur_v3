import { Button } from "@mui/material";
import React from "react";

//*_________BOUTON SUIVANT
const NextButton = ({ disabled, onClick }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
  >
    Suivant
  </Button>
);
export { NextButton };

//*_________BOUTON PRECEDENT
const PrevButton = ({ onClick, step }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={step === 1}
  >
    Précédent
  </Button>
);
export { PrevButton };

//*_________BOUTON VALIDER
const ValidButton = ({ onClick, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
  >
    Valider
  </Button>
);
export { ValidButton };

//*_________BOUTON RESTART
const RestartButton = ({ onClick, disabled }) => (
  <Button
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
  >
    Recommencer
  </Button>
);
export { RestartButton };
