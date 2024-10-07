import { useEffect } from "react";
import { RestartButton } from "../elements/FormButtons";
import { displayHelps, validateHelps } from "../utils/ValidateHelps";

const HelpDisplay = ({ formData, onRestart, step, steps }) => {
  // Utilisation du hook useEffect inconditionnellement
  useEffect(() => {
    const scrollToTop = document.querySelector(".scroll-top");
    if (scrollToTop) {
      scrollToTop.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []); // Ce hook ne dépend de rien et s'exécute une seule fois après le montage

  // Vérifie si formData et desiredLicense sont définis avant d'appeler validateHelps
  if (!formData || !formData.desiredLicense) {
    console.error('desiredLicense est manquant dans formData');
    return <p>Les données du formulaire sont incomplètes. Veuillez vérifier vos réponses.</p>;
  }

  const availableHelps = validateHelps(formData);

  const filteredHelps = Object.values(availableHelps).filter(
    (help) => help.display
  );

  return (
    <>
      <span className="scroll-top"></span>

      <div className="display-container">
        {filteredHelps.length > 0 ? (
          <>
            <div className="title-banner">
              <h1>Aides auxquelles vous pourriez prétendre :</h1>
            </div>

            <h4>
              Certaines aides sont cumulables, renseignez-vous auprès de nos
              conseillers
            </h4>
            {displayHelps(availableHelps)}
          </>
        ) : (
          <>
            <h4>Il semble qu'aucune aide ne corresponde à votre profil.</h4>
            <h4>
              N'hésitez pas à vérifier les conditions auprès de nos conseillers
            </h4>
          </>
        )}

        

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
