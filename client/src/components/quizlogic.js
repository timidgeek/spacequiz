// Determine the result based on the score
function determineResult(score) {
  let result = '';

  if (score <= 10) {
    result = 'holberton';
  } else if (score > 10 && score <= 70) {
    result = 'lost';
  } else if (score > 50 && score < 100) {
    result = 'uranus';
  } else if (score >= 100) {
    result = 'sun';
  }

  return result;
};

// Calculate score based on selected answer
// function calculateScore(selectedAnswer) {
//   let totalScore = 0;

//   // Find the selected answer in the quizData
//   const selectedQuestion = quizData.find(question => {
//     const selected = question.answers.find(answer => answer.answer === selectedAnswer);
//     return selected !== undefined;
//   })

//   // If the selected answer exists, add its weight to the total score
//   if (selectedQuestion) {
//     const selected = selectedQuestion.answers.find(answer => answer.answer === selectedAnswer)
//     totalScore += selected.weight || 0;
//   }

//   return totalScore;
// };

export default determineResult;