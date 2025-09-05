import { useState } from 'react'

const Statistics = (props) => {
  // ...
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = ([])
  const [total, setTotal] = useState(0)
 
  const handleGoodClick = () => {
  setGood(good + 1)
  setTotal(0)  }

  const handleNeutralClick = () => {
  setNeutral(neutral + 1)
  setTotal(0)  }

  const handleBadClick = () => {
  setBad(bad + 1)
  setTotal(0)  }

  return (
    <div>
      <div>
        <h1>feedback</h1>
        <button onClick={handleGoodClick}>Good</button>
        <button onClick={handleNeutralClick}>Neutral</button>
        <button onClick={handleBadClick}>Bad</button>
        <h2>stats</h2>
        <p>good: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
      </div>
      <div>
        <p>eggstra div</p>
      </div>
    </div>
  )
}

export default App