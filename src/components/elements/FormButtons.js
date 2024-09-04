import { Button } from "@mui/material";
import React from "react";

//*_________BOUTON SUIVANT
/**
 * Function NextButton that renders a reusable button 
 * that allows to navigate to the next step
 * @param { boolean } disabled : determines if the button should be clickable or not
 * @param { function } onClick : function that will be executed when the button is clicked
 */

const NextButton = ({ disabled, onClick }) => ( 
  <Button
    className="form-button"
    variant="contained"
    onClick={onClick} // 'onClick' property with 'onClick' parameter (eventHandler that exectues the function)
    disabled={disabled}
  >
    Suivant
  </Button>
);
export { NextButton };

//*_________BOUTON PRECEDENT
/**
 * Function that allows to go back to previous step
 * @param { function } onClick : the function that will be executed when the button is clicked
 * @param { number } step : determines on which step the button should be disabled
 */
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
/**
 * Function taht allows to validate the form
 */
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
/**
 * Function that allows the user to restart the form
 */
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

