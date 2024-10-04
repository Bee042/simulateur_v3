import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";


/**
 * Step 5 of the form
 * Provides fields concerning the social situation of the user
 */

const Step5 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <FormControl
        className="input-wrapper"
        error={!!errors.integrationIssues}
        fullWidth
      >
        <FormLabel className="input-label">
          Rencontrez-vous des <strong>difficultés</strong> d’intégration sociale, professionnelles ou matérielles ?
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="integrationIssues"
                  checked={formData.integrationIssues === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.integrationIssues && (
          <FormHelperText>{errors.integrationIssues}</FormHelperText>
        )}
      </FormControl>



      <FormControl
        className="input-wrapper"
        error={!!errors.handicap}
        fullWidth
      >
        <FormLabel className="input-label">
          Êtes-vous en situation de <strong>handicap</strong> ?
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="handicap"
                  checked={formData.handicap === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.handicap && <FormHelperText>{errors.handicap}</FormHelperText>}
      </FormControl>



      <div>
        <PrevButton onClick={handlePrev} />

        <NextButton
          onClick={handleNext}
          disabled={!formData.integrationIssues || !formData.handicap}
        />
      </div>
    </>
  );
};

export default Step5;
