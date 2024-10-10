import React, { useState } from "react";
import { Container, TextField, Button } from "@mui/material";
import axios from "axios"; // Axios is used to send HTTP requests to the back-end
import { validateHelps } from "../utils/ValidateHelps";

/**
 ** REGISTRATION COMPONENT 
 * The component collects 'pseudo' and 'email' from the user and sends form data to the back-end.
 * It expects an 'onSuccess' callback, which will be triggered after successful registration.
 */

const Auth = ({ onSuccess }) => {
    // Defining STATES variables using useState hook to manage form input and error states
  const [pseudo, setPseudo] = useState("");  // State to store the pseudo (username)
  const [email, setEmail] = useState("");  // State to store the email
  const [error, setError] = useState("");  // State to store any error message

  /**
   ** Handle changes in the input fields.
   *  Depending on the name of the input field, it updates the corresponding state.
   */ 
  const handleChange = (e) => {
    const { name, value } = e.target;  // Extracting 'name' and 'value' from the event
    if (name === "pseudo") setPseudo(value); // Update the 'pseudo' state
    if (name === "email") setEmail(value);  // Update the 'email' state
  };

/**
   ** Handle the form submission.
   * - Validates that both 'pseudo' and 'email' are filled.
   * - Retrieves form data from localStorage, validates helps, and sends data to the back-end.
   */
  const handleSubmit = async () => {
    try {
            // Check if both pseudo and email are provided
      if (!pseudo || !email) {
        // Set error message if fields are missing
        setError("Veuillez renseigner le pseudo et l'email.");
        return; // Exit the function if validation fails
      }
  
      // Retrieve form data from localStorage (or initialize it as an empty object if not found)
      const formData = JSON.parse(localStorage.getItem('formData')) || {};
  
      // Calculate the available helps based on form data using the validateHelps function
      const availableHelps = validateHelps(formData);
            // Filter the helps to only include those that should be displayed

      const filteredHelps = Object.values(availableHelps).filter(
        (help) => help.display // Only include helps marked with 'display: true'
      );
  
      // Send the form data and filtered helps to the back-end using a POST request
      const response = await axios.post("http://localhost:3001/react", {
        pseudo, // Send pseudo (username)
        email, // Send email
        formData, // Send the retrieved form data from localStorage
        filteredHelps // Send the filtered helps based on the form data
      });
  
            // If the request is successful (status code 201), trigger the onSuccess callback
      if (response.status === 201) {
        onSuccess();// This could trigger a redirect or move to the next step in the app
      }
    } catch (err) {
            // Handle any errors by setting the error message from the server response
      setError(err.response.data.message); // Display error message returned from the server
    }
  };
          

   /**
   * JSX to render the form for user registration.
   * - The form includes two input fields (pseudo and email) and a submit button.
   * - Error messages are displayed in red below the input fields if there's an error.
   */
  return (
    <Container>
      <h1>Inscription</h1>
      <TextField
        label="Pseudo"
        name="pseudo"
        value={pseudo}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        value={email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Voir mes aides
      </Button>
    </Container>
  );
};

export default Auth;
