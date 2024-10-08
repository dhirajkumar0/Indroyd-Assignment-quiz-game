## KBC-Inspired Quiz Game
This is a React-based quiz game inspired by the popular show Kaun Banega Crorepati (KBC). Players can join the game by scanning a QR code using their mobile devices. The game displays questions with multiple-choice answers and tracks players' progress in real-time.

## Features
Multiplayer: Multiple players can join the game by scanning a QR code.
Question and Answer Flow: Each player can select an answer on their mobile device, and the result will be displayed on both the computer and mobile screens. 

Real-Time Updates: Players' answers are validated, and the game progresses through a list of questions in real-time.
Question Validation: Correct answers are validated, and players are notified of their success or failure.
Project Structure

.
├── src
│   ├── App.js               # Main React component
│   ├── MainScreen.js        # Component for displaying the main game screen (computer view)
│   ├── MobileScreen.js      # Component for displaying the mobile game screen
│   ├── QRCodeComponent.js   # Component for generating and displaying the QR code
│   ├── questions.js         # Contains a list of quiz questions
│   ├── App.css              # Custom styles for the app
└── public
    └── index.html           # Main HTML file
Getting Started
Prerequisites
Before running the project, ensure you have the following installed on your machine:

Node.js (version 12 or higher)
npm (comes with Node.js)
Installation
Clone the repository:


git clone https://github.com/dhirajkumar0/Indroyd-Assignment-quiz-game.git
cd kbc-quiz-game
Install dependencies:


npm install
Run the app:


npm start
Access the app: Open http://localhost:3000 in your browser.

Running the Game
Main Screen: When you first load the app, the main screen will display a QR code that players can scan to join the game.
Player Join: Players scan the QR code and enter their name to join the game.
Questions: The current question and answer options are displayed on both the computer and mobile screens.
Answer Submission: Players select their answer, and the app validates whether it's correct or not.
Game Progression: The game moves to the next question when a correct answer is given.
Customization
Adding More Questions
You can add more questions by modifying the questions.js file in the src folder. Each question consists of a question text, multiple options, and a correct answer.

Example:

javascript
Copy code
export const questions = [
  {
    question: "What is the capital of France?",
    options: ["A. Paris", "B. London", "C. Rome", "D. Berlin"],
    correctAnswer: "A",
  },
  // Add more questions here
];
Custom Styles
If you want to customize the appearance of the app, you can modify the styles in the App.css file.

Dependencies
React
qrcode.react – Used for generating the QR code.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Inspired by the TV show Kaun Banega Crorepati.
Uses React for UI and state management.
