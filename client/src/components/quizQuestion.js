import "./quizQuestion.css";
import sparkle1 from "../images/sparkle_quiz.png"
import sparkle2 from "../images/sparkle_quiz_2.png"


function QuizQuestionComponent(props) {
    function onClick(id) {
        document.getElementById(id).classList.add("selected");
        let qid = id.split(" ")[0];
        document.querySelectorAll(`[id^=${qid}].selected`).forEach(answer => {
            if (answer.id !== id) {
                answer.classList.remove("selected");
            }
        });
    }


    const quizQuestion = props.question;
    return (
        <div className="questionWrapper" id={quizQuestion.id}>
            <h2 className="question">{quizQuestion.question}</h2>
            <img className="quizSparkle1" src={sparkle1}></img>
            <img className="quizSparkle2" src={sparkle2}></img>
            <ul className="answersWrapper">
                {quizQuestion.answers.map(answer => {
                    return (
                        <li className="answer" id={quizQuestion.id + " " + answer.id}>
                            <label htmlFor=""></label>
                            <p>{answer.answer}</p>
                            <input type="radio" name="answer" value={answer.weight} onClick={() => onClick(quizQuestion.id + " " + answer.id)}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default QuizQuestionComponent;