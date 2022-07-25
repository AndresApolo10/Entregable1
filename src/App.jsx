import { useState } from 'react'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'
import colors from './utils/colors'
import ButtonBox from './components/ButtonBox'

function App() {

  const getRandomElement = arr => {
    const indexRandom = Math.floor(Math.random() * arr.length)
    return arr[indexRandom]
  }

  let quoteRandom = getRandomElement(quotes)
  let colorRandom = getRandomElement(colors)

  const [randomQuote, setRandomQuote] = useState(quoteRandom)
  const [randomColors, setRandomColors] = useState(colorRandom)

const objStyle = {
  backgroundColor: randomColors
}

const getRandomAll = () => {
  quoteRandom = getRandomElement(quotes)
  colorRandom = getRandomElement(colors)

  setRandomQuote(quoteRandom)
  setRandomColors(colorRandom)
}

  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
        randomQuote={randomQuote} 
        randomColors={randomColors}            
      />
      <ButtonBox
        randomColors={randomColors}
        getRandomAll={getRandomAll}
      />
    </div>
  )
}

export default App
