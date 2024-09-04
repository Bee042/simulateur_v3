import { Button, Card, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";


/**
 * Component that displays a 404 error page when the user navigates to a wrong url/route
 * Displays a messsage to inform the user
 * and offers a button to come back to the home page
 */


function Page404() {

  /**
   * useNavigate is a hook used for routing in React app
   * allows a programed navigation between the different routes of the app
   * 
   * it uses a function navigate that can be called to change the current url/route
   */
  const navigate = useNavigate();

  const backToForm = () => {
    // navigate is used to navigate to the home page when the button backToForm is clicked
    navigate("/");
  };

  return (
    <Container className="container-404">
      <Card className="card-404">
        <Typography className="text-404">Vous n'avez pas l'air d'être au bon endroit !</Typography>

        <Typography className="text-404">Retrouvez votre chemin</Typography>

        <Button
          className="button-404"
          variant="contained"
          color="success"
          onClick={backToForm}>
          en cliquant ici
        </Button>
      </Card>
    </Container>
  );
}

export default Page404;
