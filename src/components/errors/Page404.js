import { Button, Card, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Page404() {
  const navigate = useNavigate();

  const backToForm = () => {
    navigate("/")
  };

  return (
    <Container>
      <Card>

        <Typography>Il semble que vous n'êtes pas au bon endroit !</Typography>

        <Typography>Retrouvez votre chemin</Typography>

        <Button
          variant="contained"
          color="primary"
          onClick={backToForm}
        >
          en cliquant ici
        </Button>

      </Card>
    </Container>
  );
};

export default Page404;
