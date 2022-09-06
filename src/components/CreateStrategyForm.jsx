import { useContext } from "react";
import { Button } from "react-bootstrap";
import { StrategyContext } from "../context/StrategyContext";
import { Card } from "react-bootstrap";
import "./CreateStrategyForm.css"

function CreateStrategyForm() {
  const { strategy } = useContext(StrategyContext);

  const handleCreateStrategy = () => {
    console.log(strategy);
    fetch("https://currensee-io-api.web.app/userStrategies", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ strategy }),
    })
      .then((results) => results.json())
      .then((data) => {
        console.log(data);
      })
      .catch(console.error);
  };

  return (
    <div>
      <div>
        {strategy.map((currencypair, index) => (
          <Card key={index}>
            <Card.Body
              className="d-flex">
              <Card.Title>{currencypair.id}</Card.Title>
              <Card.Text>{currencypair.countries}</Card.Text>
              <Card.Text>{currencypair.type}</Card.Text>
              <Card.Text>{currencypair.volatility}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <br />
      <Button
        variant="outline-light"
        onClick={(e) => handleCreateStrategy(strategy)}
      >
        Create Strategy
      </Button>{" "}
    </div>
    
  );
}

export default CreateStrategyForm;
