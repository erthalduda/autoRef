import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

export default function cardColecoes() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>NOME</CardContent>
      <CardActions>
        <button type="submit" className="btn btn-success">
          Acessar
        </button>
      </CardActions>
    </Card>
  );
}
