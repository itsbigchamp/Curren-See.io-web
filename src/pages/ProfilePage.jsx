import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./ProfilePage.css";

function ProfilePage() {
  const [collectedStrategy, setCollectedStrategy] = useState([]);
  useEffect(() => {
    fetch("https://currensee-io-api.web.app/userStrategies")
      .then((results) => results.json())
      .then((data) => setCollectedStrategy(data))
      .catch(console.error);
  }, []);
  console.log({ collectedStrategy });
  return (
    <div className="strategy-container">
      {collectedStrategy.map((collectedStrategy, index) => {
        console.log(collectedStrategy);
        return (
          <Card key={index}>
            <Card.Body>
              <div>
                <Card.Title>{collectedStrategy.id}</Card.Title>
                <br />
                {collectedStrategy.strategy.map((strat, index) => (
                  <div className="strategy-item" key={index}>
                    <Card.Text>{strat.id}</Card.Text>
                    <Card.Text>{strat.countries}</Card.Text>
                    <Card.Text>{strat.type}</Card.Text>
                    <Card.Text>{strat.volatility}</Card.Text>
                    <br />
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
export default ProfilePage;
