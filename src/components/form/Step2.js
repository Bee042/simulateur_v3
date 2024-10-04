import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  } from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";

/**
 * Step 2 of the form
 * Provides fields concerning the age and nationality of the user
 */

const Step2 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <FormControl className="input-wrapper" error={!!errors.age}>
        <input
          className="age-field"
          type="text"
          name="age"
          value={formData.age}
          placeholder="Saisissez votre âge"
          onChange={handleChange}
          min="15"
          max="99"
          step="1"
        />
        {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
      </FormControl>



      <FormControl
        className="input-wrapper"
        error={!!errors.isFrench}
        fullWidth
      >
        <FormLabel className="input-label">
          Êtes-vous de nationalité française ?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="isFrench"
                  checked={formData.isFrench === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.isFrench && <FormHelperText>{errors.isFrench}</FormHelperText>}
      </FormControl>

      {formData.isFrench === "false" && (
        <FormControl
          className="input-wrapper"
          error={!!errors.residentPermit}
          fullWidth
        >
          <FormLabel className="input-label">
            Disposez-vous d'un permis de séjour en cours de validité ?
          </FormLabel>

          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    name="residentPermit"
                    checked={formData.residentPermit === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.residentPermit && (
            <FormHelperText>{errors.residentPermit}</FormHelperText>
          )}
        </FormControl>
      )}

      <div>
        <PrevButton onClick={handlePrev} />

        <NextButton
          onClick={handleNext}
          disabled={
            (formData.isFrench === "false" && !formData.residentPermit) ||
            !formData.isFrench ||
            !formData.age
          }
        />
      </div>
    </>
  );
};

export default Step2;
