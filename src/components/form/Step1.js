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

/**
 * Step 1 of a multistep form
 * Provides an interface with many fields concerning the driving license
 * It manages the form state and error messages
 * and updates the formData based on the user answers
 * and controls the navifation to the next step if the current step is valid * 
 *
 * @param {object} props.errors 
 * @param {object} props.formData 
 * @param {Function} props.handleChange 
 * @param {Function} props.handleNext 
 */

const Step1 = ({ errors, formData, handleChange, handleNext }) => {

  return (
    <>
      <FormControl
        className="input-wrapper"
        fullWidth // component expands to take full width of its parent container
        error={!!errors.desiredLicense}
        // the double !! converts value to boolean
      >
        <FormLabel className="input-label">
          Quel permis de conduire souhaitez-vous financer ?
        </FormLabel>

        <Select
          className="input-field"
          name="desiredLicense"
          value={formData.desiredLicense}
          onChange={handleChange}
          displayEmpty  // allows select component to display empty option when no option selected
        >
          <MenuItem value="" disabled>Choisissez</MenuItem>
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
          {/* map iterates over the array of stings ["true", "false"] and generate a set of radio button  */}
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}       // identifies uniquely each FormControlLabel
              control={
                <Radio
                  name="initalTraining"
                  // checked determines if the button is selected or not
                  // by comparing the current value to the value from map iteration (false or true)
                  // if true : radio button is checked, if false it is not checked
                  checked={formData.initalTraining === value} 
                  // when the user clicks on a radio button, it triggers a 'onchange' event that executes the function 'handleChange'
                  onChange={handleChange}
                  // value (true of false) is hold in a varaible
                  value={value}
                />
              }
              // IF the value is 'true' the radio button's label will be 'oui' OTHERWISE it will be 'non'
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {/* checks: IF there is an error message THEN display a 'FormHelperText' with the message of 'errors.initalTraining'  */}
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
          Etes-vous <strong>déjà inscrit</strong> en école de conduite pour ce
          permis ?
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
          <FormHelperText>
            {errors.necessaryForProfessionalProject}
          </FormHelperText>
        )}
      </FormControl>


      <FormControl
        className="input-wrapper"
        fullWidth
        error={!!errors.validLicenseAorB}
      >
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


      <div>
        <NextButton
          onClick={handleNext} // runs the function 'handleNext' when the button is click (with eventHandler 'onClick')
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
