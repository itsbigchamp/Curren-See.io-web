import Card from "react-bootstrap/Card";
import "./CurrencyPairCard.css";
// import { Button } from "react";

function CurrencyPairCard({ currencypair }) {
  return (
    <Card className="card-container">
      <Card.Body
        style={{ height: "400px", backgroundColor: "#222"}}
        className="d-flex flex-column align-items-center"
      >
        <div className="cp-container">
          <Card.Title>{currencypair.id}</Card.Title>
          <br />
          <Card.Text>{currencypair.countries}</Card.Text>
          <br />
          <Card.Text>{currencypair.type}</Card.Text>
          <br />
          <Card.Text>{currencypair.volatility}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CurrencyPairCard;
