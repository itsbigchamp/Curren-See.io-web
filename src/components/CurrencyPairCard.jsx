import CurrencyPairSelector from "./CurrencypairSelector";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function CurrencyPairCard({ currencypair }) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{currencypair.id}</Card.Title>
        <Card.Text>{currencypair.countries}</Card.Text>
        <Card.Text>{currencypair.type}</Card.Text>
        <Card.Text>{currencypair.volatility}</Card.Text>
        <CurrencyPairSelector />
      </Card.Body>
    </Card>
  );
}

export default CurrencyPairCard;
