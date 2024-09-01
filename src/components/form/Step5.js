import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";

const Step5 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <FormControl className="input-wrapper" error={!!errors.integrationIssues}>
        <FormLabel className="input-label">
          Rencontrez-vous des <strong>difficultés</strong> d’intégration sociale, professionnelles ou matérielles ?
        </FormLabel>
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

      <FormControl className="input-wrapper" error={!!errors.handicap}>
        <FormLabel className="input-label">
          Êtes-vous en situation de <strong>handicap</strong> ?
        </FormLabel>

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
