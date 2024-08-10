import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
  } from "@mui/material";
  

  const Step5 = ({errors, formData, handleChange, handlePrev, handleNext} ) => {

    return (

        <>
        <FormControl
          fullWidth
          margin="normal"
          error={!!errors.integrationIssues}
        >
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

        <FormControl
          fullWidth margin="normal"
          error={!!errors.handicap}
        >
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
          {errors.handicap && (
            <FormHelperText>{errors.handicap}</FormHelperText>
          )}
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={handlePrev}
        >
          Précédent
        </Button>

        <Button
          variant="contained"
          color="primary"
          onClick={handleNext}
        >Suivant
        </Button>
      </>

    );
  };

  export default Step5;