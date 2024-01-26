
import { useEffect, useState } from 'react'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src": "/imgs/c63.jpg", matched: false  },
  { "src": "/imgs/gt4rs.jpg", matched: false },
  { "src": "/imgs/hurcan performante.jpg", matched: false },
  { "src": "/imgs/m4.jpg", matched: false },
  { "src": "/imgs/r8.jpg", matched: false },
  { "src": "/imgs/rs4.jpg", matched: false }
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns ] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))
    
    setCards(shuffledCards)
    setTurns(0)
  }

// handle a choice

const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

}

// compare 2 selected cards

useEffect(() => {
  if (choiceOne && choiceTwo) {

    if (choiceOne.src === choiceTwo.src) {
      setCards(prevCards => {
        return prevCards.map(card =>{
          if (card.src === choiceOne.src) {
            return {...card, matched: true}
          } else {
            return card
          }
        })
      })
      resetTurn()
    } else {
      setTimeout(() =>resetTurn(), 1000)
    }
  }
}, [choiceOne, choiceTwo])

console.log(cards)


// rest choices and increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}

return (
  <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New game</button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped ={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
  </div>
);

}

export default App;

