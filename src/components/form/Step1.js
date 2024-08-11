import React from "react";

import {
  // Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import { NextButton } from "../elements/FormButtons";

const Step1 = ({ errors, formData, handleChange, handleNext }) => {
  return (
    <>
      <FormControl fullWidth margin="normal" error={!!errors.age}>
        <TextField
          label="Âge"
          type="text"
          name="age"
          value={formData.age}
          placeholder="Entrez votre âge"
          onChange={handleChange}
          inputProps={{ min: 15, max: 99, step: 1 }}
        />
        {errors.age && <FormHelperText>{errors.age}</FormHelperText>}
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.existingLicense}>
        <FormLabel>Possédez-vous déjà un permis de conduire ?</FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="existingLicense"
                  checked={formData.existingLicense === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.existingLicense && (
          <FormHelperText>{errors.existingLicense}</FormHelperText>
        )}
      </FormControl>

      <FormControl fullWidth margin="normal" error={!!errors.desiredLicense}>
        <FormLabel>Quel permis de conduire souhaitez-vous financer ?</FormLabel>

        <Select
          name="desiredLicense"
          value={formData.desiredLicense}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Choisissez
          </MenuItem>
          <MenuItem value="A">A1 ou A2</MenuItem>
          <MenuItem value="B">B ou BE</MenuItem>
          <MenuItem value="C">C</MenuItem>
        </Select>
        {errors.desiredLicense && (
          <FormHelperText>{errors.desiredLicense}</FormHelperText>
        )}
      </FormControl>

      <NextButton
        onClick={handleNext}
        disabled={
          !formData.age || !formData.existingLicense || !formData.desiredLicense
        }
      />
    </>
  );
};

export default Step1;
