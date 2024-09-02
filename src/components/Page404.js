import { Button, Card, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  const backToForm = () => {
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
