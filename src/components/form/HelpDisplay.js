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

  return (
    <>
      <div className="display-container">
        <div className="title-banner">
          <h1>Aides auxquelles vous pourriez prétendre :</h1>
        </div>

        <h4>
          Certaines aides sont cumulables, renseignez-vous auprès de nos
          conseillers
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
