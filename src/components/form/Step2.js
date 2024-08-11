import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";


const Step2 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <FormControl fullWidth margin="normal" error={!!errors.isFrench}>
        <FormLabel>Etes vous de nationalité française ?</FormLabel>

        <div>
          <FormControlLabel
            control={
              <Radio
                name="isFrench"
                checked={formData.isFrench === "true"}
                value="true"
                onChange={handleChange}
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
        {errors.isFrench && <FormHelperText>{errors.isFrench}</FormHelperText>}
      </FormControl>

      {formData.isFrench === "false" && (
        <FormControl fullWidth margin="normal" error={!!errors.residentPermit}>
          <FormLabel>
            {" "}
            Disposez vous d'un permis de séjour en cours de validité ?{" "}
          </FormLabel>

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

      <PrevButton onClick={handlePrev} />

      <NextButton
        onClick={handleNext}
        disabled={
          (formData.isFrench === "false" && !formData.residentPermit) ||
          !formData.isFrench
        }
      />
    </>
  );
};

export default Step2;
