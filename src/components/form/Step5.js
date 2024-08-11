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
      <FormControl fullWidth margin="normal" error={!!errors.integrationIssues}>
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

      <FormControl fullWidth margin="normal" error={!!errors.handicap}>
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
        {errors.handicap && <FormHelperText>{errors.handicap}</FormHelperText>}
      </FormControl>

      <PrevButton onClick={handlePrev} />

      <NextButton
        onClick={handleNext}
        disabled={
          !formData.integrationIssues || !formData.handicap
        }
      />
    </>
  );
};

export default Step5;
