import "./quizQuestion.css";


function QuizQuestionComponent(props) {
    const quizQuestion = props.question;
    return (
        <div className="questionWrapper">
            <h2 className="question">{quizQuestion.question}</h2>
            <ul className="answersWrapper">
                {quizQuestion.answers.map(answer => {
                    return (
                        <li className="answer">
                            <input type="radio" name="answer" value={answer.weight} />
                            {answer.answer}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuizQuestionComponent;