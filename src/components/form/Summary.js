// import React, { useState } from "react";
import { RestartButton } from "../elements/FormButtons";
import { displayHelps, validateHelps } from "../utils/ValidateHelps";

const Summary = ({ formData, onRestart, step, steps }) => {

  // const [helps, setHelps] = useState({});

    const availableHelps = validateHelps(formData);
    // setHelps(availableHelps);

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

export default Summary;
