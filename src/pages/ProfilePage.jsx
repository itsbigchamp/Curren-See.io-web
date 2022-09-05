import { useEffect, useState } from "react";
import { StrategyContext } from "../context/StrategyContext";
import { Card } from "react-bootstrap";

function ProfilePage({ strategy, currencypairs }) {
  const [collectedStrategy, setCollectedStrategy] = useState([]);
  useEffect(() => {
    fetch("https://currensee-io-api.web.app/userStrategies")
      .then((results) => results.json())
      .then((data) => setCollectedStrategy(data))
      .catch(console.error);
  }, []);
  console.log({ collectedStrategy });
  return (
    <div>
      {collectedStrategy.map((collectedStrategy, index) => {
        console.log(collectedStrategy);
        return (
          <Card key={index}>
            <Card.Body
              style={{ height: "50px" }}
              className="d-flex flex-colum align-items-center"
            >
              <Card.Title>{collectedStrategy.id}</Card.Title>

              {collectedStrategy.strategy.map((strat, index) => (
                <div key={index}>
                  <Card.Text>{strat.id}</Card.Text>
                  <Card.Text>{strat.countries}</Card.Text>
                  <Card.Text>{strat.type}</Card.Text>
                  <Card.Text>{strat.volatility}</Card.Text>
                </div>
              ))}
            </Card.Body>
          </Card>
        );
      })}
      <h3>This is the ProfilePage</h3>
    </div>
  );
}
export default ProfilePage;
