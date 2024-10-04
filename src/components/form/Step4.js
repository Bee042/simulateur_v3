import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { NextButton, PrevButton } from "../elements/FormButtons";


/**
 * Step 4 of the form
 * Provides fields concerning the military situation of the user
 */

const Step4 = ({ errors, formData, handleChange, handlePrev, handleNext }) => {
  return (
    <>


      {/* SNU */}
      <FormControl className="input-wrapper" error={!!errors.snu}>
        <FormLabel className="input-label">
          Êtes-vous <strong>engagé dans le SNU</strong> (Service National Universel)?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="snu"
                  checked={formData.snu === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.snu && 
        <FormHelperText>{errors.snu}</FormHelperText>}
      </FormControl>



      {/* Reservistes */}
      <FormControl className="input-wrapper" error={!!errors.reservist}>
        <FormLabel className="input-label">
          Êtes-vous <strong>réserviste</strong> dans la réserve opérationnelle de <strong>Police Nationale</strong> ou des <strong>Armées</strong> ?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="reservist"
                  checked={formData.reservist === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.reservist && (
          <FormHelperText>{errors.reservist}</FormHelperText>
        )}
      </FormControl>


      <div>
        <PrevButton onClick={handlePrev} />
        <NextButton
          onClick={handleNext}
          disabled={!formData.snu || !formData.reservist}
        />
      </div>
    </>
  );
};

export default Step4;
