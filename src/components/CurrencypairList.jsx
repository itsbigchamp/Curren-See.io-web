import CurrencyPairCard from "./CurrencyPairCard";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { StrategyContext } from "../context/StrategyContext";
import "./CurrencyPairList.css"
// get the price pairs

function CurrencyPairList() {
  const { strategy, setStrategy } = useContext(StrategyContext);
  const [currencyPairs, setCurrencyPairs] = useState([]);
  const handleSelectedPair = (currencypair) => {
    setStrategy([...strategy, currencypair]);
    console.log(currencypair);
  };
  console.log({ strategy });

  useEffect(() => {
    fetch("https://currensee-io-api.web.app/currencyPairs")
      .then((results) => results.json())
      .then((data) => setCurrencyPairs(data))
      .catch(console.error);
  }, []);

  return (
    <div className="carousel-background"> 

    <Carousel
      className="container"
      variant="light"
      slide={false}
      interval={null}
      >
      {currencyPairs.map((currencypair, index) => (
        <Carousel.Item key={index}>
          <CurrencyPairCard currencypair={currencypair} />

          <Carousel.Caption>
            <Button
              variant="outline-light"
              onClick={(e) => handleSelectedPair(currencypair)}
              >
              Select CurrencyPair
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
      </div>
  );
}

export default CurrencyPairList;
