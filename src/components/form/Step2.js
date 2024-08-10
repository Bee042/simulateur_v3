import {
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";

const Step2 = ({
  errors,
  formData,
  setFormData,
  handlePrev,
  handleNext,
}) => {

  const nationaliyHandleChange = (event) => {
    const { name, value } = event.target;

    // Clear residentPermit if isFrench is switched back to true
    // équivalent handlenext mais spécifique au step2
    if (name === "isFrench" && value === "true") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        residentPermit: "", // Clear
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

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
                onChange={nationaliyHandleChange}
                value="true"
              />
            }
            label="Oui"
          />
          <FormControlLabel
            control={
              <Radio
                name="isFrench"
                checked={formData.isFrench === "false"}
                onChange={nationaliyHandleChange}
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
            Disposez vous d'un permis de séjour en cours de validité ?
          </FormLabel>

          <div>
            <FormControlLabel
              control={
                <Radio
                  name="residentPermit"
                  checked={formData.residentPermit === "true"}
                  onChange={nationaliyHandleChange}
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
                  onChange={nationaliyHandleChange}
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
