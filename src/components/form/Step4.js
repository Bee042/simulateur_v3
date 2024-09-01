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






      {/* Permit B */}
      {/* {formData.reservist && (
        <FormControl className="input-wrapper" error={!!errors.everHadBLicense}>
          <FormLabel className="input-label">Avez-vous déjà eu un permis B ?</FormLabel>
          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    name="everHadBLicense"
                    checked={formData.everHadBLicense === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.everHadBLicense && (
            <FormHelperText>{errors.everHadBLicense}</FormHelperText>
          )}
        </FormControl>
      )} */}

      {/* Days Reserve */}
      {/* {formData.everHadBLicense && (
        <FormControl className="input-wrapper" error={!!errors.daysReserve}>
          <FormLabel className="input-label">
            Avez-vous effectué 50 jours dans la réserve opérationnelle ?
          </FormLabel>
          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    name="daysReserve"
                    checked={formData.daysReserve === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.daysReserve && (
            <FormHelperText>{errors.daysReserve}</FormHelperText>
          )}
        </FormControl>
      )} */}

      {/* End of Contract */}
      {/* {formData.daysReserve && (
        <FormControl className="input-wrapper" error={!!errors.endOfContract}>
          <FormLabel className="input-label">
            Êtes-vous à plus de 2 ans de la fin de votre contrat d'engagement ?
          </FormLabel>
          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    name="endOfContract"
                    checked={formData.endOfContract === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.endOfContract && (
            <FormHelperText>{errors.endOfContract}</FormHelperText>
          )}
        </FormControl>
      )}
 */}
      {/* Justificatif d'inscription */}
      {/* {formData.endOfContract && (
        <FormControl className="input-wrapper" error={!!errors.trainingProof}>
          <FormLabel className="input-label">
            Avez-vous un justificatif d'inscription en auto-école ?
          </FormLabel>
          <div>
            {["true", "false"].map((value) => (
              <FormControlLabel
                key={value}
                control={
                  <Radio
                    name="trainingProof"
                    checked={formData.trainingProof === value}
                    onChange={handleChange}
                    value={value}
                  />
                }
                label={value === "true" ? "Oui" : "Non"}
              />
            ))}
          </div>
          {errors.trainingProof && (
            <FormHelperText>{errors.trainingProof}</FormHelperText>
          )}
        </FormControl>
      )} */}

      {/* Consolidated Conditions */}
      {/* {formData.reservist === "true" && (
 <FormControl className="input-wrapper" error={!!errors.snu}>
        <FormLabel className="input-label">
          Si vous remplissez toutes ces conditions, cliquez sur oui. Si l'une de ces conditions n'est pas remplie, cliquez sur non :
          <ul>
            <li>J'ai signé mon contrat d'engagement avant mes 25 ans</li>
            <li>Je n'ai jamais été titulaire du permis B</li>
            <li>J'ai effectué au moins 50 jours d'activité dans la réserve</li>
            <li>Je suis à plus de 2 ans de la fin de mon contrat d'engagement</li>
            <li>J'ai un justificatif d'inscription en auto-école</li>
          </ul>
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="reserveConditions"
                  checked={formData.snu === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.snu && <FormHelperText>{errors.snu}</FormHelperText>}
      </FormControl>
)} */}

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
