import CreateStrategyForm from "../components/CreateStrategyForm";
import CurrencyPairList from "../components/CurrencyPairList";
import "./LandingPage.css";

// get the price pairs
function LandingPage() {
  return (
    <div>
      <br />
      <CurrencyPairList />
      <br />
      <h1 className="cp-text">Currency Pair Strategy</h1>
      <br />
      <CreateStrategyForm />
    </div>
  );
}
export default LandingPage;
