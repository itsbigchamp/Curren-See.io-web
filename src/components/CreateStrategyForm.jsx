import { useContext } from "react"
import { Button } from "react-bootstrap"
import { StrategyContext } from "../context/StrategyContext"
import { Card } from "react-bootstrap"
//get for the strategy
function CreateStrategyForm() {
    const {strategy} = useContext(StrategyContext)
    return(
    
        <div>
            <div>
            {strategy.map((currencypair, index) => (
                <Card key={index}>
                <Card.Body style={{height: '300px'}} className="d-flex flex-column align-items-center">
                  <Card.Title>{currencypair.id}</Card.Title>
                  <Card.Text>{currencypair.countries}</Card.Text>
                  <Card.Text>{currencypair.type}</Card.Text>
                  <Card.Text>{currencypair.volatility}</Card.Text>
                  
                </Card.Body>
              </Card>
            ))};
            </div>
          
            <Button variant="dark-outline">Create Strategy</Button>{' '}

        </div>
    )
}
export default CreateStrategyForm