import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  TextField,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";

const Step2 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <FormControl className="input-wrapper" error={!!errors.age}>
        <TextField
        className="input-field"
          label="Saisissez votre âge"
          type="text"
          name="age"
          value={formData.age}
          placeholder="Entrez votre âge"
          onChange={handleChange}
          inputProps={{ min: 15, max: 99, step: 1 }}
        />
        {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
      </FormControl>

      <FormControl className="input-wrapper" error={!!errors.isFrench}>
        <FormLabel className="input-label">
          Etes vous de nationalité française ?
        </FormLabel>

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
        <FormControl className="input-wrapper" error={!!errors.residentPermit}>
          <FormLabel className="input-label">
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
