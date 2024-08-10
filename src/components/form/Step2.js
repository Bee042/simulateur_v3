import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";

//TODO : simplifier les boutons et le style

const Step2 = ({
  errors,
  formData,
  setFormData,
  handleChange,
  handlePrev,
  handleNext,
}) => {


  return (
    <>
      <FormControl
        fullWidth margin="normal"
        error={!!errors.isFrench}
      >

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

          <FormLabel> Disposez vous d'un permis de séjour en cours de validité ? </FormLabel>

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



      <Button variant="contained" color="primary" onClick={handlePrev}>
        Précédent
      </Button>


      <Button
        variant="contained"
        color="primary"
        onClick={handleNext}
        disabled={
          (formData.isFrench === "false" && !formData.residentPermit) ||
          !formData.isFrench
        }
      >
        Suivant
      </Button>


    </>
  );
};

export default Step2;
