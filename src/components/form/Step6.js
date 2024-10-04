import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
} from "@mui/material";
import { PrevButton, ValidButton } from "../elements/FormButtons";


/**
 * Step 6 of the form
 * Provides fields concerning the financial situation of the user
 * Allows validation of the form with handleSubmit
 * (that stores the datas, the steps and the state of submission of the form)
 */

const Step6 = ({
  formData,
  errors,
  handleChange,
  handlePrev,
  handleSubmit,
}) => {
  return (
    <>
      <FormControl className="input-wrapper" error={!!errors.cpf} fullWidth>
        <FormLabel className="input-label">
          Disposez-vous d’un <strong>CPF</strong> (Compte Personnel de Formation) ?
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="cpf"
                  checked={formData.cpf === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.cpf && <FormHelperText>{errors.cpf}</FormHelperText>}
      </FormControl>



      <FormControl
        className="input-wrapper"
        error={!!errors.creditAccess}
        fullWidth
      >
        <FormLabel className="input-label">
          Avez-vous accès au <strong>crédit bancaire</strong> traditionnel ?
        </FormLabel>

        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="creditAccess"
                  checked={formData.creditAccess === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.creditAccess && (
          <FormHelperText>{errors.creditAccess}</FormHelperText>
        )}
      </FormControl>



      <FormControl className="input-wrapper" error={!!errors.lowIncomes}>
        <FormLabel className="input-label">
          Disposez-vous de <strong>faibles ressources</strong> ?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="lowIncomes"
                  checked={formData.lowIncomes === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.lowIncomes && (
          <FormHelperText>{errors.lowIncomes}</FormHelperText>
        )}
      </FormControl>



      <FormControl className="input-wrapper" error={!!errors.socialIncome}>
        <FormLabel className="input-label">
          Bénéficiez-vous du <strong>RSA</strong> ou de l'<strong>AAH</strong>?
        </FormLabel>
        <div>
          {["true", "false"].map((value) => (
            <FormControlLabel
              key={value}
              control={
                <Radio
                  name="socialIncome"
                  checked={formData.socialIncome === value}
                  onChange={handleChange}
                  value={value}
                />
              }
              label={value === "true" ? "Oui" : "Non"}
            />
          ))}
        </div>
        {errors.socialIncome && (
          <FormHelperText>{errors.socialIncome}</FormHelperText>
        )}
      </FormControl>


      <div>
        <PrevButton onClick={handlePrev} />

        <ValidButton
          onClick={handleSubmit}
          disabled={
            !formData.cpf ||
            !formData.creditAccess ||
            !formData.lowIncomes ||
            !formData.socialIncome
          }
        />
      </div>
    </>
  );
};

export default Step6;
