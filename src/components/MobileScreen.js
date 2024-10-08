import React, {useState} from 'react'

const MobileScreen = ({
  players,
  handlePlayerJoin,
  handleAnswerSubmit,
  currentQuestion,
}) => {
  const [playerName, setPlayerName] = useState('')
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const handleJoin = () => {
    if (!players.includes(playerName)) {
      handlePlayerJoin(playerName)
    }
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      handleAnswerSubmit(playerName, selectedAnswer)
    }
  }

  return (
    <div>
      <h2>Join the Game</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={e => setPlayerName(e.target.value)}
      />
      <button onClick={handleJoin}>Join</button>

      {players.includes(playerName) && (
        <div>
          <h2>Question: {currentQuestion.question}</h2>
          {currentQuestion.options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                name="answer"
                value={option.charAt(0)}
                onChange={e => setSelectedAnswer(e.target.value)}
              />
              {option}
            </div>
          ))}
          <button onClick={handleSubmit}>Submit Answer</button>
        </div>
      )}
    </div>
  )
}

export default MobileScreen
