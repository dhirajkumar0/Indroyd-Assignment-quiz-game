import React from "react";

const MainScreen = ({ players, currentQuestion }) => {
  return (
    <div>
      <h1>KBC Quiz Game</h1>
      <h2>Players:</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>

      <h2>Current Question:</h2>
      <p>{currentQuestion.question}</p>
      <ul>
        {currentQuestion.options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default MainScreen;
