import Card from "react-bootstrap/Card";
import { useState } from "react";
// import { Button } from "react";

function CurrencyPairCard({ currencypair }) {
  return (
    <Card>
      <Card.Body
        style={{ height: "300px" }}
        className="d-flex flex-column align-items-center"
      >
        <Card.Title>{currencypair.id}</Card.Title>
        <Card.Text>{currencypair.countries}</Card.Text>
        <Card.Text>{currencypair.type}</Card.Text>
        <Card.Text>{currencypair.volatility}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CurrencyPairCard;
