import React from "react";

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  Select,
} from "@mui/material";
import { NextButton } from "../elements/FormButtons";

const Step1 = ({ errors, formData, handleChange, handleNext }) => {
  return (
    <>
      <FormControl
        className="input-wrapper"
        fullWidth
        error={!!errors.desiredLicense}
      >
        <FormLabel className="input-label">
          Quel permis de conduire souhaitez-vous financer ?
        </FormLabel>

        <Select
          className="input-field"
          name="desiredLicense"
          value={formData.desiredLicense}
          onChange={handleChange}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Choisissez
          </MenuItem>
          <MenuItem className="menu-item" value="A1">A1</MenuItem>
          <MenuItem className="menu-item" value="A2">A2</MenuItem>
          <MenuItem className="menu-item" value="B">B</MenuItem>
          <MenuItem className="menu-item" value="BE">BE</MenuItem>
          <MenuItem className="menu-item" value="B96">B96</MenuItem>
          <MenuItem className="menu-item" value="C">C</MenuItem>
          <MenuItem className="menu-item" value="D">D</MenuItem>
        </Select>
        {errors.desiredLicense && (
          <FormHelperText>{errors.desiredLicense}</FormHelperText>
        )}
      </FormControl>



      <FormControl 
        className="input-wrapper"
        error={!!errors.initalTraining}
        fullWidth 
      >
        <FormLabel className="input-label">
          Est-ce une <strong>inscription initiale</strong> ou <strong>après échec à l'épreuve pratique</strong> (formation complémentaire) ? 
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                name="initalTraining"
                  checked={formData.initalTraining === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.initalTraining && (
          <FormHelperText>{errors.initalTraining}</FormHelperText>
        )}
      </FormControl>

      <FormControl 
        className="input-wrapper" 
        fullWidth
        error={!!errors.alreadyTraining}
      >
        <FormLabel className="input-label">
          Etes-vous <strong>déjà inscrit</strong> en école de conduite pour ce permis ?
        </FormLabel> 

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                name="alreadyTraining"
                checked={formData.alreadyTraining === value}
                onChange={handleChange}
                value={value}
                />  
              }  
              label={value === "true" ? "Oui" : "Non"}
              />  
          ))}  
        </div>  
        {errors.alreadyTraining && (
          <FormHelperText>{errors.alreadyTraining}</FormHelperText>
        )}    
      </FormControl>


      <FormControl
      className="input-wrapper" 
      error={!!errors.necessaryForProfessionalProject}
      fullWidth 
      >
        <FormLabel className="input-label">
          L'obtention de ce permis contribue-t-elle à la <strong>réalisation d'un projet professionnel</strong> ?
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                name="necessaryForProfessionalProject"
                checked={formData.necessaryForProfessionalProject === value}
                onChange={handleChange}
                value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
              />
          ))}
        </div>
        {errors.necessaryForProfessionalProject && (
          <FormHelperText>{errors.necessaryForProfessionalProject}</FormHelperText>
        )}
      </FormControl>


      <FormControl
        className="input-wrapper" 
        fullWidth
        error={!!errors.validLicenseAorB}>
        <FormLabel className="input-label">
          Possédez-vous un permis de conduire en cours de validité <strong>de catégorie A ou B</strong> ?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
            key={value}
            control={
                <Radio
                  className="radio-step1"
                  name="validLicenseAorB"
                  checked={formData.validLicenseAorB === value}
                  onChange={handleChange}
                  value={value}
                  />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.validLicenseAorB && (
          <FormHelperText>{errors.validLicenseAorB}</FormHelperText>
        )}
      </FormControl>


      {/* <FormControl 
        className="input-wrapper"
        fullWidth 
        error={!!errors.firstSubscription}
      >
        <FormLabel className="input-label">
          Est-ce une première inscription ?
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="firstSubscription"
                  checked={formData.firstSubscription === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.firstSubscription && (
          <FormHelperText>{errors.firstSubscription}</FormHelperText>
        )}
      </FormControl> */}


      {/* <FormControl fullWidth margin="normal" error={!!errors.licenseSuspension}>
        <FormLabel>
          Fait-il l'objet d'une suspension ou avez vous l'interdiction de solliciter un permis ?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="licenseSuspension"
                  checked={formData.licenseSuspension === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.licenseSuspension && (
          <FormHelperText>{errors.licenseSuspension}</FormHelperText>
        )}
      </FormControl>
 */}


      <div>
        <NextButton
          onClick={handleNext}
          disabled={
            !formData.desiredLicense ||
            !formData.initalTraining ||
            !formData.alreadyTraining ||
            !formData.necessaryForProfessionalProject ||
            !formData.validLicenseAorB
          }
        />
      </div>
    </>
  );
};

export default Step1;
