import CreateStrategyForm from "../components/CreateStrategyForm";
import CurrencyPairList from "../components/CurrencypairList";
import { useState } from "react";
import { StrategyContext } from "../context/StrategyContext";

// get the price pairs
function LandingPage() {
  
  return (
    <>
    <CurrencyPairList />
      <h3>This is the LandingPage</h3>
      <CreateStrategyForm/>
    </>
  );
}
export default LandingPage;
