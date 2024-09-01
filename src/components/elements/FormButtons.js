import { Button } from "@mui/material";
import React from "react";

//*_________BOUTON SUIVANT
const NextButton = ({ disabled, onClick }) => (
  <Button
    className="form-button"
    variant="contained"
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
    className="form-button"
    variant="outlined"
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
    className="valid-button"
    variant="contained"
    color="success"
    onClick={onClick}
    disabled={disabled}
  >
    Voir les aides
  </Button>
);
export { ValidButton };

//*_________BOUTON RESTART
const RestartButton = ({ onClick, disabled }) => (
  <Button
    className="restart-button"
    variant="contained"
    color="primary"
    onClick={onClick}
    disabled={disabled}
  >
    Recommencer
  </Button>
);
export { RestartButton };

