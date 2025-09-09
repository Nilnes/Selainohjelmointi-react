// En saanut 1.10 refaktorointia tehtyä toimivaksi, joten jätin tehtävän kohtaan 10.9

import { useState } from 'react'

const Button = (props) => {

}

const StatisticLine = (props) => {

}

const Statistics = (props) => {
  const total = props.goodClick + props.neutralClick + props.badClick
  const average = (props.goodClick * 1 + props.badClick *-1) / total
  const percentage = (props.goodClick / total) * 100
  console.log("value goodClick:", props)
  return (
    <div>
      <h2>Statistics:</h2>
      <p>Average: {average}</p>
      <p>Percentage: {percentage}%</p>
    </div>
  )
}

const App = () => {
  const [goodClick, setGood] = useState(0)
  const [neutralClick, setNeutral] = useState(0)
  const [badClick, setBad] = useState(0)
 
  const handleGoodClick = () => {
  setGood(goodClick + 1)}

  const handleNeutralClick = () => {
  setNeutral(neutralClick + 1)}

  const handleBadClick = () => {
  setBad(badClick + 1)}

  return (
    <div>
      <div>
        <h1>feedback</h1>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
        <h2>stats</h2>
        <p>good review: {goodClick}</p>
        <p>neutral review: {neutralClick}</p>
        <p>bad review: {badClick}</p>
      </div>
      <div>
        <Statistics goodClick={goodClick} neutralClick={neutralClick} badClick={badClick}></Statistics>
      </div>
    </div>
  )
}

export default App