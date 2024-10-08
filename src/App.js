import React, {useState, useEffect} from 'react'
import QRCodeComponent from './QRCodeComponent'
import MainScreen from './MainScreen'
import MobileScreen from './MobileScreen'
import {questions} from './questions'
import './App.css'

function App() {
  const [players, setPlayers] = useState([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [gameStarted, setGameStarted] = useState(false)

  useEffect(() => {
    // This useEffect could be used to handle any side effects like synchronizing state between players.
  }, [answers])

  const handlePlayerJoin = playerName => {
    setPlayers(prevPlayers => [...prevPlayers, playerName])
  }

  const handleAnswerSubmit = (playerName, answer) => {
    const currentQuestion = questions[currentQuestionIndex]
    const isCorrect = currentQuestion.correctAnswer === answer

    if (isCorrect) {
      alert(`${playerName} answered correctly!`)
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1)
      }, 2000) // Proceed to the next question after a delay
    } else {
      alert(`Wrong answer from ${playerName}!`)
    }

    setAnswers(prev => ({...prev, [playerName]: answer}))
  }

  return (
    <div className="App">
      {!gameStarted ? (
        <QRCodeComponent setGameStarted={setGameStarted} />
      ) : (
        <>
          <MainScreen
            players={players}
            currentQuestion={questions[currentQuestionIndex]}
          />
          <MobileScreen
            players={players}
            handlePlayerJoin={handlePlayerJoin}
            handleAnswerSubmit={handleAnswerSubmit}
            currentQuestion={questions[currentQuestionIndex]}
          />
        </>
      )}
    </div>
  )
}

export default App
