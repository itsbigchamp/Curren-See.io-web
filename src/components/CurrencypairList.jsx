import CurrencyPairCard from "./CurrencyPairCard";
import Carousel from "react-bootstrap/Carousel";
import { useEffect, useState } from "react";
// get the price pairs

function CurrencyPairList() {
  const [currencyPair, setCurrencyPair] = useState([]);

  useEffect(() => {
    fetch("https://currensee-io-api.web.app/currencyPairs")
      .then((results) => results.json())
      .then((currencypair) => setCurrencyPair(currencypair))
      .catch(console.error);
  }, []);

  return (
    <Carousel slide={false}>
      {currencyPair.map((currencypair, index) => (
        <Carousel.Item key={index}>
          <CurrencyPairCard currencypair={currencypair} />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CurrencyPairList;
