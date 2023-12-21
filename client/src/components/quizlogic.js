import React, { useState } from 'react';
import "./quizLogic.css";
import quizData from "./quizData.js";


// Determine the result based on the score
function determineResult(score) {
  let result = '';

  if (score <= 10) {
    result = 'You are at Holberton.';
  } else if (score > 10 && score <= 70) {
    result = 'You are Lost?';
  } else if (score > 50 && score < 100) {
    result = 'It seems you are exploring Uranus.';
  } else if (score <= 100) {
    result = 'You are on the Sun.';
  }

  return result;
};

// Calculate score based on selected answer
function calculateScore(selectedAnswer) {
  let totalScore = 0;

  // Find the selected answer in the quizData
  const selectedQuestion = quizData.find(question => {
    const selected = question.answers.find(answer => answer.answer === selectedAnswer);
    return selected !== undefined;
  })

  // If the selected answer exists, add its weight to the total score
  if (selectedQuestion) {
    const selected = selectedQuestion.answers.find(answer => answer.answer === selectedAnswer)
    totalScore += selected.weight || 0;
  }

  return totalScore;
};

// THE BIG KAHUNA
function QuizComponent() {
  // Tracking user's answer selection
  const [userSelections] = useState({});

  // HANDLE ANSWER SELECTION
  // const handleAnswerSelection = (selectedAnswer) => {
  //   // Get all key/value pairs from userSelections
  //   setUserSelections({
  //     ...userSelections,
  //     [currentQuestion]: selectedAnswer,
  //   });
  // };


  const calculateTotalScore = () => {
    let totalScore = 0;

    Object.keys(userSelections).forEach((questionIndex) => {
      const selectedAnswer = userSelections[questionIndex];
      totalScore += calculateScore(selectedAnswer);
    });

    return totalScore
  };

  const handleFinishQuiz = () => {
    const totalScore = calculateTotalScore();
    const result = determineResult(totalScore);

    return (
      <div>
        <h2>{result}</h2>
      </div>
    );
  };
} 


/* TESTING ------------------------------------

// Simulate a user taking the quiz
function simulateQuiz() {
  // Simulate user selections (replace these with actual user input)
  const userSelections = [
    "Yes",
    "Alien salad",
    "A little guy",
    "Green guys who don’t speak english… Or do they?",
    "Very cold. I bet if I went outside I’d slip on ice.",
    "Folgers, with grounds",
    "Everywhere, there is silence",
    "Spacejam (1996)"
  ];

  let totalScore = 0;

  // Calculate the total score based on user selections
  userSelections.forEach(selection => {
    totalScore += calculateScore(selection);
  });

  // Determine the result based on the total score
  const result = determineResult(totalScore);

  console.log("Total Score:", totalScore);
  console.log("Result:", result);
}

// Run the simulated quiz
simulateQuiz();
---------------------------------------------- */

export default QuizComponent;
