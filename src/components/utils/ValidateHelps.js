import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


/**
 *  Define an object containing information about different financial helps for driving license
 */
const Helps = {
  help1: {
    // name of the help
    name: "Permis à 1€ par jour",
    // amount is displayed in a chip
    amount: `
    300-1200€`,
    // global description on the help
    description:`
    Pour une première inscription, l'aide peut être de 600, 800, 1000 ou 1200 €. 
    Pour financer une formation complémentaire après échec à l'épreuve pratique pour la même catégorie de permis, l'aide est de 300 €`,
    // additional info or warning
    info: `
    Attention : pour bénéficier de cette aide, il faut être déjà inscrit en école de conduite`,
    // conditions to meet to get the help
    conditions: `
    - Accessible uniquement pour les permis de catégorie A1, A2 et B.
    - Réservé au financement d'une formation initiale
    - Utilisable pour une formation complémentaire en cas d'échec à l'épreuve pratique si elle a été financé par le même prêt.
    - Ne peut être attribué qu'une fois par bénéficiaire et pour une même catégorie de permis.`,
    // how to proceed or where to get information to get this help
    procedure: `
    Contactez une école de conduite labellisée.`,
    // boolean to control if the help is displayed of not, 'false' by default
    display: false,
  },
  help2: {
    name: "Fonds d'Aide aux Jeunes (FAJ)",
    description: `
    Jusqu'à 300€ pour le code et 1200€ pour la conduite`,
    amount: `
    max 300€`,
    info: `
    Attention : Ces critères sont donnés à titre indicatif et peuvent varier en fonction de votre région de résidence.`,
    conditions: `
    - Habiter dans le département où vous effectuez la demande,
    - Ne pas être bénéficiaire du RSA ou autre revenu social,
    - Etre inscrit dans un parcours d'insertion professionnelle,
    - Ne pas pouvoir être aidé.e par votre famille`,
    procedure: `
    Contactez votre Mission Locale, votre CCAS`,
    display: false,
  },
  help3: {
    name: "Bourse au permis de conduire",
    description:`
    Certaines municipalités vous aident à financer votre formation au permis de conduire en échange d'une activité à intérêt collectif.`,
    amount: "Variable",
    info: ``,
    conditions: `
    Aide réservée aux jeunes (souvent moins de 25 ans)
    Conditions variables selon les communes`,
    procedure: `
    Contactez votre commune de résidence`,
    display: false,
  },
  help4: {
    name: "Aide aux volontaires du SNU",
    description: `
    - Accès gratuit à une plateforme d’apprentissage en ligne pour le code.
    - Première présentation au code gratuite selon le contrat d'engagement.`,
    amount: `
    Gratuit`,
    info: ``,
    conditions: `
    - Avoir validé son séjour de cohésion pour avoir accès à la plateforme d'e-learning,
    - Avoir validé les 2 premières phases du SNU pour bénéficier d’une première présentation gratuite à l’ETG`,
    procedure: `
    Prenez contact avec le support SNU via votre espace via votre espace personnel`,
    display: false,
  },
  help5: {
    name: "Aide aux apprentis",
    description: `
    Aide forfaitaire de 500 € valable uniquement pour le permis B`,
    amount: `
    500€`,
    info: `
    Attention : pour bénéficier de cette aide, il faut être déjà inscrit en école de conduite`,
    conditions: `
    - Avoir au moins 18 ans
    - Etre déjà inscrit dans la formation au permis de conduire,
    - Etre titulaire d'un contrat d'apprentissage en cours d'exécution
    - Ne peut être attribuée qu'une seule fois pour un même apprenti.
    Peut être cumulable avec d'autres aides de financement`,
    procedure: `
    Transmettez votre demande au centre CFA où vous êtes inscrit`,
    display: false,
  },
  help6: {
    name: "Aide aux demandeurs d'emploi",
    description: `
    Dans le cadre de votre recherche d'emploi, vous pouvez bénéficier, sous certaines conditions, d'une aide de France Travail de 1200€ maximum.`,
    amount: `
    max 1200€`,
    info: ``,
    conditions: `
    - Avoir au moins 18 ans,
    - Etre demandeur d'emploi depuis au moins 6 mois consécutifs
    - Etre inscrit sur la liste des demandeurs d'emploi en catégories A, B ou D « formation » et « contrat de sécurisation professionnelle (CSP) »,ou en « contrats aidés ».
    - Toucher un minimum social (RSA, ASS, AAH, ...), ou être indemnisé par l'assurance chômage, ou toucher l'ARE ou l'ASP minimale (c'est-à-dire d’un montant inférieur ou égal à 31,97 €).
    `,
    procedure: `
    Renseignez-vous auprès de votre conseiller France Travail`,
    display: false,
  },
  help7: {
    name: "Aide en cas de handicap",
    description: `
    L’épreuve théorique est gratuite sous conditions.
    L’épreuve pratique est gratuite.`,
    amount: `Gratuit`,
    info: ``,
    conditions: `
    L’épreuve théorique est gratuite, si vous remplissez 2 conditions :
    - Vous avez un avis médical d’aptitude en lien avec votre handicap ;
    - Vous avez l'obligation de faire des visites médicales périodiques après l'obtention du permis.
    - Le permis doit être indispensable à l'obtention d'un emploi ou au maintien dans un emploi
    `,
    procedure: `
    Contactez votre MDPH ou l'AGEFIPH.
    Vous pouvez aussi vous adresser à la FIPHFP si vous dépendez de la Fonction Publique.`,
    display: false,
  },
  help8: {
    name: "Utilisation de votre CPF",
    description: `
    Votre CPF est utilisable pour le financement du code et/ou du permis
    Tous les permis sont éligibles`,
    amount: `
    Variable`,
    info: ``,
    conditions:`
    - Ne pas disposer d'un permis de conduire valable en France,
    - Justifier que l'obtention de ce permis participe à la réalisation de votre projet professionnel.
    - Ne pas avoir fait l'objet d'une suspension de permis B ni d'une interdiction de le repasser`,
    procedure: `
    Inscrivez-vous sur Mon Compte Formation, avec votre compte France Connect`,
    display: false,
  },
  help9: {
    name: "Aide aux réservistes",
    description: `
    Aide attribuées aux réservistes de la garde nationale ou des forces armées. 
    Participation de 1000€`,
    amount: `
    1000€`,
    info: `
    Attention : cette aide est accessible uniquement si vous remplissez toutes les conditions suivantes :`,
    conditions: `
    - Avoir signé un contrat initial d'engagement à servir avant l'âge de 25 ans.
    - Ne jamais avoir été titulaire d'un permis de catégorie B.
    - Avoir effectué au moins 50 jours d'activité dans la réserve.
    - Etre à plus de 2 ans de la fin du contrat d'engagement.
    - Avoir un justificatif d'inscription au permis de catégorie B dans un établissement agréé et un justificatif de règlement.
    - Ne pas avoir déjà bénéficié de cette participation au financement.`,
    procedure: `
    Déposez la demande de participation auprès de l'organisme gestionnaire dont vous dépendez.`,
    display: false,
  },
  help10: {
    name: "Microcrédit",
    description: `
    Crédit de faible montant et adapté aux revenus, utilisable pour le financement du permis de conduire.`,
    amount: `
    300 - 8000€`,
    info: ``,
    conditions: `
    Etre exclu.e du système bancaire classique`,
    procedure: `
    Adressez-vous à un service d'accompagnement social qui servira d'intermédiaire avec le système bancaire.`,
    display: false,
  },
};


/**
 * Function to validate and update the helps the user could get
 */
const validateHelps = (formData) => {
  // 'Object' returns an array of the keys of the Helps object
  // 'forEach' loops over every key of this array and give to each of them the value false to its display prop
  Object.keys(Helps).forEach((key) => {
    Helps[key].display = false;
  });

  // create a copy of the 'Helps' object defined above to update its display properties
  const updatedHelps = { ...Helps };

  /**
   * Defines a boolean variable based on the 'formData' object
   * each variable is used for stpecific conditions to meet and returns a boolean
   */
  const isDesiredLicenseFor1Euro =
    formData.desiredLicense === "A1" ||
    formData.desiredLicense === "A2" ||
    formData.desiredLicense === "B";
  const isDesiredLicenseIsB = formData.desiredLicense === "B";
  const isDesiredLicenseForCPF =
    formData.desiredLicense === 'BE' || 
    formData.desiredLicense === 'B96' || 
    formData.desiredLicense === 'C' || 
    formData.desiredLicense === 'D';
  const isInitialTraining = formData.initalTraining === "true";
  const isNecessaryForProfessionalProject = formData.necessaryForProfessionalProject === "true";
  const hasValidLicenseAorB = formData.validLicenseAorB === 'true';
  const isAge15to25 = formData.age >= 15 && formData.age <= 25;
  const isAge18to25 = formData.age >= 18 && formData.age <= 25;
  const isAgeMin18  = formData.age >= 18;
  const isAgeMax18  = formData.age < 18;
  const isFrenchValid = formData.isFrench === "true";
  const isApprentice = formData.apprentice === "true";
  const isRegisteredToFranceTravailFor6months = formData.registeredToFranceTravailFor6months === "true";
  const isSnuValid = formData.snu === "true";
  const isReservistValid = formData.reservist === "true";
  const hasIntegrationIssues = formData.integrationIssues === "true";
  const hasHandicap = formData.handicap === "true";
  const hasCpf = formData.cpf === 'true';
  const hasLowIncome = formData.lowIncomes === "true";
  const hasSocialIncomes = formData.socialIncome === "true";
  const hasCreditAccess = formData.creditAccess === "true";

  

  /**
   * Section to evaluate different eligibility crieteria based of 'formData' 
   * and updates the 'updateHelps' object to indicate which helps should be displayed
   * Each help has it's own block of validation rules and retunrs true if all the conditions are met (means the help will be displayed)
   */

  //* PERMIS 1 EURO
  if (
    isAge15to25 &&
    isDesiredLicenseFor1Euro &&
    isInitialTraining &&
    !hasValidLicenseAorB
    // Condition disabled in order to display the help even if the user is not registered yet in a school
    // isAlreadyTraining
  ) {
    updatedHelps.help1.display = true;
  }

  //* FOND AIDE AUX JEUNES
  if (
    isAge18to25  &&
    hasIntegrationIssues &&
    hasLowIncome &&
    !hasSocialIncomes
  ) {
    updatedHelps.help2.display = true;
  }

  //* BOURSE PERMIS
  // No official informations (depends of the cities policies) : the help is displayed by default if the user meets the age condition
  if (
    isAge18to25
  ) {
    updatedHelps.help3.display = true;
  }

  //*  SNU
    if (
    isSnuValid &&
    isAgeMax18 &&
    isFrenchValid
  ) {
    updatedHelps.help4.display = true;
  }

  //*  APPRENTIS
  if (
    isAgeMin18  &&
    isApprentice &&
    isDesiredLicenseIsB 
    // Condition disabled i order to display the help even if the user is not registered yet in a school
    // isAlreadyTraining
  ) {
    updatedHelps.help5.display = true;
  }

  //*  POLE EMPLOI
  if (
    isAgeMin18 &&
    isRegisteredToFranceTravailFor6months &&
    hasSocialIncomes &&
    isDesiredLicenseIsB
  ) {
    updatedHelps.help6.display = true;
  }

  //*  HANDICAP
  if (
    hasHandicap &&
    isNecessaryForProfessionalProject
  ) {
    updatedHelps.help7.display = true;
  }
    
  //*  CPF
  if (
    hasCpf &&
    isNecessaryForProfessionalProject &&
    isDesiredLicenseForCPF &&
    hasValidLicenseAorB 
  ) {
  updatedHelps.help8.display = true;

  } else if (
    hasCpf &&
    isNecessaryForProfessionalProject &&
    !isDesiredLicenseForCPF &&
    !hasValidLicenseAorB
  ) {
  updatedHelps.help8.display = true;

  } else {
  updatedHelps.help8.display = false;
  }

  //*  RESERVISTE
  if (
    isReservistValid
  ) {
    updatedHelps.help9.display = true;
  }

  //*  MICROCREDIT PERSONNEL
  if (
    !hasCreditAccess
  ) {
    updatedHelps.help10.display = true;
    }

return updatedHelps;
};
export { validateHelps };



/**
 * This section displays the list of the available helps as an accordion component
 * Each accordion displays information about a specific help (name, amount, description, conditions, warning, procedure)
 * only the helps with a display set to 'true' are shown here
 */

const displayHelps = (helps) => {
  return (
    <div>
      {/* convert 'helps' object to an array of its value to work with each help item separatly */}
      {Object.values(helps)
        // .filter creates a new array containing only the help items where display is 'true'
        .filter((help) => help.display)
        // .map transforms each help item from the filtered array into an accordion component (for display)
        .map((help, index) => (
          <Accordion key={index}>
            <AccordionSummary
              className="accordion-summary"
              expandIcon={<KeyboardArrowDownIcon />}
            >
              {/* typography is MUI component used to render text with consistent styling */}
              <Typography className="card-title" variant="h6">
                {/* placeholder that dynamically insert the value of the help name */}
                {help.name}
              </Typography>

              {/* stack is a layout component from MUI used to display the children in a specific direction with consistent spacing */}
              <Stack
                direction="row"
                spacing={1}       // spacing unit predefined to 8px/scale
              > 
              {/* Chip is a MUI component to display short information, here the amount of the help */}
                <Chip
                  className="amount-chip"
                  label={help.amount}
                  color="success"         // color predefined green
                />
              </Stack>
            </AccordionSummary>

            <AccordionDetails className="accordion-details">
              {/* displays the details of the help when the accordion is expanded */}

              {/* Conditionally renders the description if help.description exists */}
              {/* syntax : AND operator (&&) checks if the condition on its left AND if true it returns the expression on its right
                if left expression is falsy : stops the check ans returns false without checkin right side */}
              {help.description && (
                <>
                  <p className="help-undertitle">Description : </p>
                  <p className="help-text">{help.description}</p>             
                </>
              )}


              {help.conditions && (
                <>
                  <p className="help-undertitle">Conditions : </p>
                  {help.info && (
                  <p className="help-info">{help.info}</p>
              )}

                  {/* renders a list of conditions, eahc condition on a new line */}
                  <ul className="help-text">
                    {help.conditions
                      // Split converts the multi strings condition in an array of new lines after every (\n) characters
                      .split("\n") 
                       // Filter creates a new array containing only the items that are not empty
                       // .trim removes the whitespaces from each line (once it's removed, if there is a content then it is filtered)
                      .filter((condition) => condition.trim() !== "")
                      // map iterates over the filtered array and creates a new array of JSX elements (as a list) with a unique key 'i'
                      .map((condition, i) => (
                        <li key={i}>{condition.trim()}</li> // Trim and display each condition
                      ))}
                  </ul>{" "}
                </>
              )}

              {help.procedure && (
                <>
                  <p className="help-undertitle">Où s'adresser ? </p>
                  <p className="help-text">{help.procedure}</p>
                </>
              )}
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export { displayHelps };
