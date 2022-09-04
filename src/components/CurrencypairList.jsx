import CurrencyPairCard from "./CurrencyPairCard";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { StrategyContext } from "../context/StrategyContext";
// get the price pairs

function CurrencyPairList() {
  const { strategy, setStrategy } = useContext(StrategyContext);
  const [currencyPairs, setCurrencyPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState();
  const handleSelectedPair = (currencypair) => {
    console.log(currencypair);

    // setSelectedPair(currencypair);
    setStrategy([...strategy, currencypair])
  };

  // useEffect(() => {
  //   setStrategy({...strategy, selectedPair })
  // },[selectedPair])

  // console.log({ selectedPair });
  console.log({ strategy })

  useEffect(() => {
    fetch("http://currensee-io-api.web.app/currencyPairs")
      .then((results) => results.json())
      .then((data) => setCurrencyPairs(data))
      .catch(console.error);
  }, []);

  return (
    <Carousel className="container" variant="dark" slide={false} interval={null}>
      {currencyPairs.map((currencypair, index) => (
        <Carousel.Item key={index}>
          <CurrencyPairCard currencypair={currencypair} />

          <Carousel.Caption>
            <Button
              variant="secondary"
              onClick={(e) => handleSelectedPair(currencypair)}>
              Select CurrencyPair
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CurrencyPairList;
