
import Button from "react-bootstrap/Button";

function CurrencyPairSelector({ setStrategy }) {
//   const [pair, setPair] = useState({});
//   const addPair = () => {
//     fetch("https://currensee-io-api.web.app/userStrategies", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ pair }),
//     })
//       .then((results) => results.json())
//       .then((data) => {
//         setStrategy(data);
//         setPair({});
//       })
//       .catch(console.error);
  
  //send the post when the user ready to add to the strategy
  return (
    <div className="select-currencypair">
      <Button variant="secondary"
    //   value={pair}
    //   onChange={e => setPair(e.target.value)}
    //   onClick={addPair}
      >Select CurrencyPair</Button>{" "}
    </div>
  );
}
export default CurrencyPairSelector;
