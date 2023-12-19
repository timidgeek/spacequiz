import "./quizQuestion.css";

const quizQuestion = {
    question: "can you breathe the air outside?",
    answers: [
        {answer: "yes", value: 0},
        {answer: "no", value: 8},
        {answer: "i dont know", value: 5},
        {answer: "yes, but only once", correct: 10}
    ]
}

function QuizQuestionComponent() {
    return (
        <div className="questionWrapper">
            <h2 className="question">{quizQuestion.question}</h2>
            <ul className="answersWrapper">
                {quizQuestion.answers.map(answer => {
                    return (
                        <li className="answer">
                            <input type="radio" name="answer" value={answer.value} />
                            {answer.answer}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuizQuestionComponent;