import React from 'react';
import DiceBox from './DiceBox';


export default function App() {

    const [numbers, setNumbers] = React.useState([1, 2, 5, 6, 3])

    function randoNum() {
        return Math.floor(Math.random() * 6) + 1
    }

    function rollDice() {
        setNumbers ((prevNumbers) => {
            return prevNumbers.map(num => randoNum())
          })
        
    }

    const listOfNumbers = numbers.map(num => <DiceBox number={num} />)
    
//    console.log(randoNum)

    return (
        <div className='dice'>
        
            <div className='numbers'>
            {listOfNumbers}
            </div>

            <button className="button" onClick = {rollDice}>Roll Dice</button>
        </div>
    )

}