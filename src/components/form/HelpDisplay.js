import { useEffect } from "react";
import { RestartButton } from "../elements/FormButtons";
import { displayHelps, validateHelps } from "../utils/ValidateHelps";

/**
 * Component that provides a summary of the helps available
 * depending on the user's answers in the form
 *
 * @param {Object} props.formData : datas used to validate and determine available helps
 * @param {Function} props.onRestart : function called on click on RestartButton
 * @param {number} props.step : current step
 * @param {Array} props.steps : array of all the steps
 *
 * @returns {JSX.Element} : returns the summary of all the available helps + restart button
 */

const HelpDisplay = ({ formData, onRestart, step, steps }) => {
  const availableHelps = validateHelps(formData);

  useEffect(() => {
    // scroll to top of the app when the user arrives on this page
    // we select the element with .scroll-top class (we add a special span for this effect)
    const scrollToTop = document.querySelector(".scroll-top");
    // if it's existing,
    if (scrollToTop){
        // we use the method scrollIntoView that moves the display to the element with the class .display-container
        scrollToTop.scrollIntoView({
          behavior: 'smooth',
        });
    }
      // array of dependancy : empty because we need the effect to run only one time
  }, []);
  
  /* TODO Séparer les aides auxquelles l'utilisateur a vraiment droit de celles auxquelles il pourrait avoir droit */
  return (
    <>
      <span className="scroll-top"></span>

      <div className="display-container">
        <div className="title-banner">
          <h1>Aides auxquelles vous pourriez prétendre :</h1>
        </div>

        <h4>
          Certaines aides sont cumulables, renseignez-vous auprès de nos conseillers
        </h4>

        {displayHelps(availableHelps)}

        <div>
          <RestartButton
            onClick={onRestart}
            disabled={steps ? step === steps.length : false}
          />
        </div>
      </div>
    </>
  );
};

export default HelpDisplay;
