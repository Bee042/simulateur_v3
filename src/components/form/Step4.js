import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";

const Step4 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>
      <FormControl fullWidth margin="normal" error={!!errors.reservist}>
        <FormLabel>
          {" "}
          Êtes-vous réserviste dans la réserve opérationnelle de Police
          Nationale ou des Armées ?{" "}
        </FormLabel>

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

      <PrevButton onClick={handlePrev} />


      <NextButton
        onClick={handleNext}
        disabled={
          !formData.reservist || !formData.snu
        }
      />
    </>
  );
};

export default Step4;
