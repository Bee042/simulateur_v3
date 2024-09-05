import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  Select,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";


/**
 * Step 3 of the form
 * Provides fields concerning the professional situation of the user
 */

const Step3 = ({
  errors,
  // setFormData,
  formData,
  handleChange,
  handleNext,
  handlePrev,
}) => {

  return (
    <>
      <FormControl 
        className="input-wrapper" 
        error={!!errors.jobStatus}
      >

        <FormLabel className="input-label">
          Quelle est votre situation professionnelle ?
        </FormLabel>

        <Select
          className="input-field"
          name="jobStatus"
          value={formData.jobStatus}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" disabled>Choisissez</MenuItem>
          <MenuItem value="salarié.e">Salarié.e</MenuItem>
          <MenuItem value="étudiant.e">Etudiant.e</MenuItem>
          <MenuItem value="sans emploi">Sans emploi</MenuItem>
        </Select>

        {errors.jobStatus && (
          <FormHelperText>{errors.jobStatus}</FormHelperText>
        )}
      </FormControl>


      {/* SI ETUDIANT */}
      {formData.jobStatus === "étudiant.e" && (
        <FormControl
          className="input-wrapper"
          fullWidth
          error={!!errors.apprentice}
        >
          <FormLabel className="input-label">
            Êtes-vous actuellement en contrat d'apprentissage ?
          </FormLabel>
          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    className="radio-step3"
                    name="apprentice"
                    checked={formData.apprentice === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.apprentice && (
            <FormHelperText>{errors.apprentice}</FormHelperText>
          )}
        </FormControl>
      )}


      {/* SI SANS EMPLOI */}
      {formData.jobStatus === "sans emploi" && (
        <FormControl
          className="input-wrapper"
          fullWidth
          error={!!errors.registeredToFranceTravailFor6months}
        >
          <FormLabel className="input-label">
            Êtes-vous inscrit à France Travail depuis 6 mois consécutifs ?
          </FormLabel>
          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    className="radio-step3"
                    name="registeredToFranceTravailFor6months"
                    checked={
                      formData.registeredToFranceTravailFor6months === value
                    }
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.registeredToFranceTravailFor6months && (
            <FormHelperText>
              {errors.registeredToFranceTravailFor6months}
            </FormHelperText>
          )}
        </FormControl>
      )}


      <div>
        <PrevButton onClick={handlePrev} />

        <NextButton
          onClick={handleNext}
          disabled={
            !formData.jobStatus ||
            (formData.jobStatus === "étudiant.e" && !formData.apprentice) ||
            (formData.jobStatus === "sans emploi" &&
              !formData.registeredToFranceTravailFor6months)
          }
        />
      </div>
    </>
  );
};

export default Step3;
