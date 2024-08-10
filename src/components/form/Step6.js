import {
    Button,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    Radio,
  } from "@mui/material";
  

  const Step6 = ({formData, errors, handleChange, handlePrev, handleSubmit} ) => {

    return(

        <>
        <FormControl
          fullWidth margin="normal"
          error={!!errors.cpf}
        >
          <FormLabel> Disposez-vous d’un Compte Personnel de Formation ? </FormLabel>

          <div>
            <FormControlLabel
              control={
                <Radio
                  name="cpf"
                  checked={formData.cpf === "true"}
                  onChange={handleChange}
                  value="true"
                />
              }
              label="Oui"
            />
            <FormControlLabel
              control={
                <Radio
                  name="cpf"
                  checked={formData.cpf === "false"}
                  onChange={handleChange}
                  value="false"
                />
              }
              label="Non"
            />
          </div>
          {errors.cpf && <FormHelperText>{errors.cpf}</FormHelperText>}
        </FormControl>

        <FormControl
          fullWidth margin="normal"
          error={!!errors.credit}
        >
          <FormLabel> Avez vous accès au crédit bancaire ? </FormLabel>
          
          <div>
            <FormControlLabel
              control={
                <Radio
                  name="credit"
                  checked={formData.credit === "true"}
                  onChange={handleChange}
                  value="true"
                />
              }
              label="Oui"
            />
            <FormControlLabel
              control={
                <Radio
                  name="credit"
                  checked={formData.credit === "false"}
                  onChange={handleChange}
                  value="false"
                />
              }
              label="Non"
            />
          </div>
          {errors.credit && (
            <FormHelperText>{errors.credit}</FormHelperText>
          )}
          
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handlePrev}
        >
          Précédent
        </Button>

      </>

    );
  };

  export default Step6;