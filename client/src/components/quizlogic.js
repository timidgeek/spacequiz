const quizData = [
{
  question: "Can you breathe the air outside?",
  answers: [
      {answer: "Yes", weight: 1},
      {answer: "No", weight: 30},
      {answer: "I don't know", weight: 8},
      {answer: "Yes, but only once", weight: 10}
  ]
},
{
  question: "What food do you have nearby?",
  answers: [
      {answer: "Alien salad", weight: 10},
      {answer: "Intergalactic popcorn with stardust seasoning", weight: 20},
      {answer: "Home cooked meal", weight: 1},
      {answer: "I’ve been surviving off of my hopes and dreams. I will surely starve soon.", weight: 8}
  ]
},
{
  question: "What are you using for navigation?",
  answers: [
      {answer: "NASA mission control", weight: 10},
      {answer: "A little guy", weight: 10},
      {answer: "I've lost all hope...", weight: 7},
      {answer: "Apple/Google maps", weight: 1}
  ]
},
{
  question: "Are you around people?",
  answers: [
      {answer: "Green guys who don’t speak english… Or do they?", weight: 10},
      {answer: "Yes, my classmates", weight: 1},
      {answer: "There is nobody in sight", weight: 8},
      {answer: "Yes, other astronauts", weight: 10}
  ]
},
{
  question: "What’s the weather like?",
  answers: [
      {answer: "It’s hard to tell. Looks kind of cloudy", weight: 7},
      {answer: "Very cold. I bet if I went outside I’d slip on ice.", weight: 10},
      {answer: "AC is blasting, but around 60 degrees outside", weight: 1},
      {answer: "Pretty hot… I’d say somewhere around 10,000 degrees", weight: 100}
  ]
},
{
  question: "What are you drinking?",
  answers: [
      {answer: "Folgers, with grounds", weight: 1},
      {answer: "Folgers, freeze dried", weight: 30},
      {answer: "They’re calling it an Anti-Gravity Cosmopolitan. My glass is upside down…", weight: 10},
      {answer: "My tears", weight: 4}
  ]
},
{
  question: "What can you hear?",
  answers: [
      {answer: "Everywhere, there is silence", weight: 8},
      {answer: "Gurgles, boings, synthesizers...", weight: 10},
      {answer: "The crackling of flames", weight: 50},
      {answer: "Betty... She is all around...", weight: 0}
  ]
},
{
  question: "What movie does your environment remind you of?",
  answers: [
      {answer: "Spacejam (1996)", weight: 10},
      {answer: "Across the Universe (2007)", weight: 7},
      {answer: "Hackers (1995)", weight: 1},
      {answer: "The Matrix (1999)", weight: 10}
  ]
}];

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
}

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
}

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