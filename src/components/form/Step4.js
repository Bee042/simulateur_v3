import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio
  } from "@mui/material";
  

  const Step4 = ({errors, formData, handleChange, handlePrev, handleNext}) => {

    return(
        <>
        <FormControl
          fullWidth margin="normal"
          error={!!errors.reservist}
        >
          <FormLabel> Êtes-vous réserviste dans la réserve opérationnelle de Police Nationale ou des Armées ? </FormLabel>

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
        >
          Suivant
        </Button>
      </>


    );
  };


  export default Step4;