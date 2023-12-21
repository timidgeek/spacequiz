import "./quizQuestion.css";
import sparkle1 from "../images/sparkle_quiz.png"
import sparkle2 from "../images/sparkle_quiz_2.png"


function QuizQuestionComponent(props) {

    const quizQuestion = props.question;
    return (
        <div className="questionWrapper">
            <h2 className="question">{quizQuestion.question}</h2>
            <img className="quizSparkle1" src={sparkle1}></img>
            <img className="quizSparkle2" src={sparkle2}></img>
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