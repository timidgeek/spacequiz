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
                            <label htmlFor=""></label>
                            <p>{answer.answer}</p>
                            <input type="radio" name="answer" value={answer.weight} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuizQuestionComponent;