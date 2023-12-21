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