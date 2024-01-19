
import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/imgs/c63.jpg" },
  { "src": "/imgs/gt4rs.jpg" },
  { "src": "/imgs/hurcan performante.jpg" },
  { "src": "/imgs/m4.jpg" },
  { "src": "/imgs/r8.jpg" },
  { "src": "/imgs/rs4.jpg" }
];

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns ] = useState(0)





  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random() }))
    
      setCards(shuffledCards)
      setTurns(0)
  }


  console.log(cards, turns)

  return (
    <div className="App">
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New game</button>

        <div className="card-grid">
          {cards.map(card => (
            <div className ="card" key={card.id}>
              <div>
                <img className="front" src={card.src} alt="card front" />
                <img className = "back" src="/imgs/rims.jpg" alt="card back" />
              </div>



            </div>
          ))}

        </div>
    </div>
  );
}

export default App;

