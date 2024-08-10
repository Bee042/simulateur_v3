import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    MenuItem,
    Radio,
    Select,
  } from "@mui/material";
  

  const Step3 = ({ errors, setFormData, formData, handleChange, handleNext, handlePrev } ) => {
    // console.log("step3",typeof setFormData);

    return(
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
              Choisissez
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
          onClick={() => handleNext(2)}
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

    );
  };

  export default Step3;