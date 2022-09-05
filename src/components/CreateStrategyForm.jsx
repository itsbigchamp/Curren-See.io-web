import { useContext } from "react";
import { Button } from "react-bootstrap";
import { StrategyContext } from "../context/StrategyContext";
import { Card } from "react-bootstrap";
//get for the strategy
function CreateStrategyForm({ setCurrencyPairs }) {
  const { strategy, setStrategy } = useContext(StrategyContext);

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
        // setStrategy(data);
        // setCurrencyPairs();
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
              style={{ height: "20px" }}
              className="d-flex justify-content-space-between flex-row align-items-center"
            >
              <Card.Title>{currencypair.id}</Card.Title>
              <Card.Text>{currencypair.countries}</Card.Text>
              <Card.Text>{currencypair.type}</Card.Text>
              <Card.Text>{currencypair.volatility}</Card.Text>
            </Card.Body>
          </Card>
        ))}
        ;
      </div>
      <Button
        variant="dark-outline"
        onClick={(e) => handleCreateStrategy(strategy)}
      >
        Create Strategy
      </Button>{" "}
    </div>
  );
}

export default CreateStrategyForm;
