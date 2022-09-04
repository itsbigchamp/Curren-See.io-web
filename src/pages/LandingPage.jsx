import CreateStrategyForm from "../components/CreateStrategyForm";
import CurrencyPairList from "../components/CurrencypairList";
import { useState } from "react";

// get the price pairs
function LandingPage() {
  const [strategy, setStrategy] = useState([])
  return (
    <>
    <CurrencyPairList />
      <h3>This is the LandingPage</h3>
      <CreateStrategyForm/>
    </>
  );
}
export default LandingPage;
