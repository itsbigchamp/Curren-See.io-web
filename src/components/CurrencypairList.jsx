import CurrencyPairCard from "./CurrencyPairCard";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";

import { useEffect, useState } from "react";
// get the price pairs

function CurrencyPairList() {
  const [currencyPairs, setCurrencyPairs] = useState([]);
  const [selectedPair, setSelectedPair] = useState();
  const handleSelectedPair = (currencypair) => {
    console.log(currencypair);

    setSelectedPair(currencypair);
    console.log({ selectedPair });
  };

  useEffect(() => {
    fetch("https://currensee-io-api.web.app/currencyPairs")
      .then((results) => results.json())
      .then((data) => setCurrencyPairs(data))
      .catch(console.error);
  }, []);
  // console.log({currencyPairs})
  return (
    
      <Carousel style={{ width: "500px", height: "500px"}} variant="dark" slide={false}>
        {currencyPairs.map((currencypair, index) => (
          <Carousel.Item key={index}>
           
              <CurrencyPairCard currencypair={currencypair} />
            
            <Carousel.Caption>
              <Button
                variant="secondary"
                onClick={(e) => handleSelectedPair(currencypair)}
                data-id={currencypair.id}
                // data-countries={currencypair.countries}
                // data-type={currencypair.type}
                // data-volatility={currencypair.volatility}
              >
                Select CurrencyPair
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    
  );
}

export default CurrencyPairList;
