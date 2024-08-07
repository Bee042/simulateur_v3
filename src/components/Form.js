import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  Select,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";

const Form = () => {
    
  /************************
   *   DECLARATION
   *   CONST / ETATS
   ***********************/

  const [formData, setFormData] = useState({
    age: "",
    existingLicense: "",
    desiredLicense: "",
    isFrench: "",
    residentPermit: "",
    jobStatus: "",
    apprentice: "",
    franceTravail: "",
    reservist: "",
    snu: "",
    integrationIssues: "",
    handicap: "",
    cpf: "",
    credit: "",
  });

  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);

  const stepperLabels = [
    "Étape 1: Informations personnelles",
    "Étape 2: Situation Administrative",
    "Étape 3: Situation professionnelle",
    "Étape 4: Situation militaire",
    "Étape 5: Situation particulière",
    "Étape 6: Situation financière",
  ];

  /************************
   *    USE EFFECT
   ************************/

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData); // Affiche les données récupérées du localStorage
    }
      setStep(1); // initialise à step 1 quand quit ou refresh
  }, []);

  /************************
   *      HANDLERS
   ***********************/

  //_______________Gestion des changements dans les champs de saisie
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      if (name === "isFrench" && value === "true") {
        return {
          ...prevData,
          [name]: value,
          residentPermit: "", // si isFrench = true : réinitialise residentPermis à vide
        };
      } else {
        return {
          ...prevData,
          [name]: value, // sinon : MAJ la valeur du champs
        };
      }
    });
    // console.log("handleChange : ", { [name]: value });
  };
  
  //_______________Gestion du passage à l'étape suivante
  const handleNext = (newStep) => {
    localStorage.setItem("formData", JSON.stringify(formData)); // Affiche les données sauvegardées dans le localStorage
    // console.log("handleNext - données stockées : ", formData);

    if (newStep > step && !validate()) {
      // si validation échouée : rester à l'étape en cours
      console.log("handleNext - echec validation - reste à l'etape :", step);
      return;
    }

    setStep(newStep); // Indique la nouvelle étape
    console.log("handleNext - Passe à l'étape", newStep);
  };

  //_______________Gestion du passage à l'étape précédente
  const handlePrev = () => {
    const newStep = step - 1;
    // localStorage.setItem("step", newStep);
    setStep(newStep);
    console.log("handlePrev retour step", newStep);
  };

  //_______________Gestion de soumissions du formulaire
  const handleSubmit = () => {
    localStorage.setItem("formData", JSON.stringify(formData)); // sauvegarder les datas avant de les récupérer

    // GET : Récupérer les données du local storage
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const formData = JSON.parse(storedData);

      // Créer un message récapitulatif dans l'alerte
      const alertMessage = `
        Âge: ${formData.age}
        A déjà un permis: ${
          formData.existingLicense === "true" ? "Oui" : "Non"}
        Permis souhaité : ${
          formData.desiredLicense}
        Est de nationalité française : ${
          formData.isFrench === "true" ? "Oui" : "Non"}
        A un permis de séjour valide : ${
          formData.residentPermit === null
            ? "Non concerné"
            : formData.residentPermit === "true"
            ? "Oui"
            : "Non"}
        Situation professionnelle : ${
          formData.jobStatus}
        Contrat d'apprentissage : ${
          formData.apprentice === null
            ? "non concerné"
            : formData.apprentice === "true"
            ? "Oui"
            : "Non"}
        Inscrit à France Travail 6 mois consécutifs : ${
          formData.franceTravail === null
            ? "Non concerné"
            : formData.franceTravail === "true"
            ? "Oui"
            : "Non"}
        Réserviste Police ou Armée : ${
          formData.reservist === "true" ? "Oui" : "Non"}
        Engagé dans le SNU : ${
          formData.snu === "true" ? "Oui" : "Non"}
        Difficultés d’intégration : ${
          formData.integrationIssues === "true" ? "Oui" : "Non"}
        Situation de handicap : ${
          formData.handicap === "true" ? "Oui" : "Non"}
        Compte Personnel de Formation : ${
          formData.cpf === "true" ? "Oui" : "Non"}
        Accès au crédit bancaire : ${
          formData.credit === "true" ? "Oui" : "Non"}
      `;
      // Affichage de l'alerte
      // alert(
      //   `Votre formulaire a bien été soumis avec les informations suivantes :\n${alertMessage}`
      // );
    }
  };

  

  /************************
   *      FONCTIONS
   ***********************/

  //Validation des étapes / gestion des erreurs

  const validate = () => {
    let tempErrors = {}; // stockage des erreurs de validation
    let isValid = true;

    if (step === 1) {
      if (
        !formData.age ||
        isNaN(formData.age) ||
        formData.age < 15 ||
        formData.age > 99 ||
        formData.age % 1 !== 0
      ) {
        tempErrors.age = "L'âge doit être un nombre entier entre 15 et 99.";
        isValid = false;
      }
      if (!formData.existingLicense) {
        tempErrors.existingLicense = "Ce champ est requis.";
        isValid = false;
      }
      if (!formData.desiredLicense) {
        tempErrors.desiredLicense = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 2) {
      if (!formData.isFrench) {
        tempErrors.isF2ench = "Ce champ est requis.";
        isValid = false;
      }
      if (formData.isFrench === "false" && !formData.residentPermit) {
        tempErrors.residentPermit = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 3) {
      if (!formData.jobStatus) {
        tempErrors.jobStatus = "Ce champ est requis.";
        isValid = false;
      }
      if (formData.jobStatus === "student" && !formData.apprentice) {
        tempErrors.apprentice = "Ce champ est requis.";
        isValid = false;
      }
      if (formData.jobStatus === "unemployed" && !formData.franceTravail) {
        tempErrors.franceTravail = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 4) {
      if (!formData.reservist) {
        tempErrors.reservist = "Ce champ est requis.";
        isValid = false;
      }
      if (!formData.snu) {
        tempErrors.snu = "Ce champ est requis.";
        isValid = false;
      }
    }

    if (step === 5) {
        if (!formData.integrationIssues) {
          tempErrors.integrationIssues = "Ce champ est requis.";
          isValid = false;
        }
        if (!formData.handicap) {
          tempErrors.handicap = "Ce champ est requis.";
          isValid = false;
        }
      }

      if (step === 6) {
        if (formData.cpf) {
          tempErrors.cpf = "Ce champ est requis.";
          isValid = false;
        }
        if (!formData.credit) {
          tempErrors.credit = "Ce champ est requis.";
          isValid = false;
        }
      }
  
    setErrors(tempErrors); // Affiche les erreurs trouvées lors de la validation
    console.log("Validate - erreurs : ", tempErrors);
    return isValid;
  };



  /************************
   *     RETURN
   ***********************/

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={step - 1} alternativeLabel>
          {stepperLabels.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>


      <form>
        {/*
                        STEP 1                    
        */}
        {step === 1 && (
          <>
            <FormControl
              fullWidth margin="normal"
              error={!!errors.age}
            >
              <TextField
                label="Âge"
                type="text"
                name="age"
                value={formData.age}
                placeholder="Entrez votre âge"
                onChange={handleChange}
                inputProps={{ min: 15, max: 99, step: 1 }}
              />
              {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
            </FormControl>

            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.existingLicense}
            >
              <FormLabel>Possédez-vous déjà un permis de conduire ?</FormLabel>

              <div>
                {["true", "false"].map((value) => (
                  <FormControlLabel
                    key={value}
                    control={
                      <Radio
                        name="existingLicense"
                        checked={formData.existingLicense === value}
                        onChange={handleChange}
                        value={value}
                      />
                    }
                    label={value === "true" ? "Oui" : "Non"}
                  />
                ))}
              </div>
              {errors.existingLicense && (
                <FormHelperText>{errors.existingLicense}</FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.desiredLicense}
            >
              <FormLabel> Quel permis de conduire souhaitez-vous financer ? </FormLabel>

              <Select
                name="desiredLicense"
                value={formData.desiredLicense}
                onChange={handleChange}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  Choisissez
                </MenuItem>
                <MenuItem value="A">A1 ou A2</MenuItem>
                <MenuItem value="B">B ou BE</MenuItem>
                <MenuItem value="C">C</MenuItem>
              </Select>
              {errors.desiredLicense && (
                <FormHelperText>{errors.desiredLicense}</FormHelperText>
              )}
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNext(2)}
              disabled={
                !formData.age ||
                !formData.existingLicense ||
                !formData.desiredLicense
              }
            >
              Suivant
            </Button>
          </>
        )}

        {/*
                        STEP 2               
         */}

        {step === 2 && (
          <>
            <FormControl 
              fullWidth margin="normal"
              error={!!errors.isFrench}
            >
              <FormLabel>Etes vous de nationalité française ?</FormLabel>

              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="isFrench"
                      checked={formData.isFrench === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="isFrench"
                      checked={formData.isFrench === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.isFrench && (
                <FormHelperText>{errors.isFrench}</FormHelperText>
              )}
            </FormControl>
            {formData.isFrench === "false" && (
              <FormControl
                fullWidth
                margin="normal"
                error={!!errors.residentPermit}
              >
                <FormLabel> Disposez vous d'un permis de séjour en cours de validité ? </FormLabel>

                <div>
                  <FormControlLabel
                    control={
                      <Radio
                        name="residentPermit"
                        checked={formData.residentPermit === "true"}
                        onChange={handleChange}
                        value="true"
                      />
                    }
                    label="Oui"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        name="residentPermit"
                        checked={formData.residentPermit === "false"}
                        onChange={handleChange}
                        value="false"
                      />
                    }
                    label="Non"
                  />
                </div>
                {errors.residentPermit && (
                  <FormHelperText>{errors.residentPermit}</FormHelperText>
                )}
              </FormControl>
            )}

            <Button variant="contained" color="primary" onClick={handlePrev}>
              Précédent
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleNext(3);
              }}
              disabled={
                (formData.isFrench === "false" && !formData.residentPermit) ||
                !formData.isFrench
              }
            >
              Suivant
            </Button>
          </>
        )}

        {/*
                        STEP 3               
         */}

        {step === 3 && (
          <>
            <FormControl
              fullWidth margin="normal"
              error={!!errors.jobStatus}
            >
              <FormLabel> Quelle est votre situation professionnelle ? </FormLabel>

              <Select
                name="jobStatus"
                value={formData.jobStatus}
                onChange={(e) => {
                  const value = e.target.value;
                  setFormData((prevData) => ({
                    ...prevData,
                    jobStatus: value,
                    apprentice: value === "étudiant.e" ? "" : null,
                    franceTravail: value === "sans emploi" ? "" : null,
                  }));
                }}
                displayEmpty
              >
                <MenuItem value="" disabled>
                  {" "}
                  Choisissez{" "}
                </MenuItem>
                <MenuItem value="salarié.e">Salarié.e</MenuItem>
                <MenuItem value="étudiant.e">Etudiant.e</MenuItem>
                <MenuItem value="sans emploi">Sans emploi</MenuItem>
              </Select>

              {errors.jobStatus && (
                <FormHelperText>{errors.jobStatus}</FormHelperText>
              )}
            </FormControl>
            {formData.jobStatus === "étudiant.e" && (
              <FormControl
                fullWidth
                margin="normal"
                error={!!errors.apprentice}
              >
                <FormLabel>Êtes-vous en contrat d'apprentissage ?</FormLabel>

                <div>
                  <FormControlLabel
                    control={
                      <Radio
                        name="apprentice"
                        checked={formData.apprentice === "true"}
                        onChange={handleChange}
                        value="true"
                      />
                    }
                    label="Oui"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        name="apprentice"
                        checked={formData.apprentice === "false"}
                        onChange={handleChange}
                        value="false"
                      />
                    }
                    label="Non"
                  />
                </div>
                {errors.apprentice && (
                  <FormHelperText>{errors.apprentice}</FormHelperText>
                )}
              </FormControl>
            )}
            {formData.jobStatus === "sans emploi" && (
              <FormControl
                fullWidth
                margin="normal"
                error={!!errors.franceTravail}
              >
                <FormLabel> Êtes-vous inscrit à France Travail depuis 6 mois consécutifs ? </FormLabel>

                <div>
                  <FormControlLabel
                    control={
                      <Radio
                        name="franceTravail"
                        checked={formData.franceTravail === "true"}
                        onChange={handleChange}
                        value="true"
                      />
                    }
                    label="Oui"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        name="franceTravail"
                        checked={formData.franceTravail === "false"}
                        onChange={handleChange}
                        value="false"
                      />
                    }
                    label="Non"
                  />
                </div>
                {errors.franceTravail && (
                  <FormHelperText>{errors.franceTravail}</FormHelperText>
                )}
              </FormControl>
            )}
            <Button variant="contained" color="primary" onClick={handlePrev}>
              Précédent
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleNext(4);
              }}
              disabled={
                !formData.jobStatus ||
                (formData.jobStatus === "étudiant.e" && !formData.apprentice) ||
                (formData.jobStatus === "sans emploi" &&
                  !formData.franceTravail)
              }
            >
              Suivant
            </Button>
          </>
        )}

        {/*
                        STEP 4             
         */}
        {step === 4 && (
          <>
            <FormControl
              fullWidth margin="normal"
              error={!!errors.reservist}
            >
              <FormLabel> Êtes-vous réserviste dans la réserve opérationnelle de Police Nationale ou des Armées ? </FormLabel>

              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="reservist"
                      checked={formData.reservist === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="reservist"
                      checked={formData.reservist === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.reservist && (
                <FormHelperText>{errors.reservist}</FormHelperText>
              )}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.snu}>

              <FormLabel>Êtes-vous engagé dans le SNU ?</FormLabel>

              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="snu"
                      checked={formData.snu === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="snu"
                      checked={formData.snu === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.snu && <FormHelperText>{errors.snu}</FormHelperText>}
            </FormControl>

            <Button 
              variant="contained" 
              color="primary" 
              onClick={handlePrev}
            >
              Précédent
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleNext(5);
              }}
            >
              Suivant
            </Button>
          </>
        )}


        {/*
                        STEP 5             
         */}

        {step === 5 && (
          <>
            <FormControl
              fullWidth
              margin="normal"
              error={!!errors.integrationIssues}
            >
              <FormLabel> Rencontrez-vous des difficultés d’intégration ? </FormLabel>

              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="integrationIssues"
                      checked={formData.integrationIssues === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="integrationIssues"
                      checked={formData.integrationIssues === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.integrationIssues && (
                <FormHelperText>{errors.integrationIssues}</FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth margin="normal"
              error={!!errors.handicap}
            >
              <FormLabel>Êtes-vous en situation de handicap ?</FormLabel>

              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="handicap"
                      checked={formData.handicap === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="handicap"
                      checked={formData.handicap === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.handicap && (
                <FormHelperText>{errors.handicap}</FormHelperText>
              )}
            </FormControl>

            <Button
              variant="contained"
              color="primary"
              onClick={handlePrev}
            >
              Précédent
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                handleNext(6);
              }}
            >Suivant
            </Button>
          </>
        )}

        {/*
                        STEP 6           
         */}

        {step === 6 && (
          <>
            <FormControl
              fullWidth margin="normal"
              error={!!errors.cpf}
            >
              <FormLabel> Disposez-vous d’un Compte Personnel de Formation ? </FormLabel>

              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="cpf"
                      checked={formData.cpf === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="cpf"
                      checked={formData.cpf === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.cpf && <FormHelperText>{errors.cpf}</FormHelperText>}
            </FormControl>

            <FormControl
              fullWidth margin="normal"
              error={!!errors.credit}
            >
              <FormLabel> Avez vous accès au crédit bancaire ? </FormLabel>
              
              <div>
                <FormControlLabel
                  control={
                    <Radio
                      name="credit"
                      checked={formData.credit === "true"}
                      onChange={handleChange}
                      value="true"
                    />
                  }
                  label="Oui"
                />
                <FormControlLabel
                  control={
                    <Radio
                      name="credit"
                      checked={formData.credit === "false"}
                      onChange={handleChange}
                      value="false"
                    />
                  }
                  label="Non"
                />
              </div>
              {errors.credit && (
                <FormHelperText>{errors.credit}</FormHelperText>
              )}
              
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={handlePrev}
            >
              Précédent
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={!formData.cpf || !formData.credit}
            >
              Soumettre
            </Button>
          </>
        )}

      </form>
    </Container>
  );
};

export default Form;


//TODO: message erreur dynamique 
//TODO: découper le code 
//TODO: page récap avec option restart 
//TODO: injection html dynamique metadata
