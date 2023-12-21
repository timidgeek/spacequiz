
import './quizResults.css';
import sparkle1 from "../images/sparkle_results.png"
import sparkle2 from "../images/sparkle_results_2.png"

function QuizResults(props) {
    const result = props.result;
    return (
        <div className="quizResultsWrapper">
            <h1 className="quizResultsHeader">You are: <span >{result.result}</span></h1>
            <img className="sparkle1" src={sparkle1}></img>
            <img className="sparkle2" src={sparkle2}></img>
            <div className="quizResultsContentWrapper">
                <div className="quizResultsCopyWrapper">
                    <div>{result.text}</div>
                </div>
                <div className="imgWrapper">
                    <img className="resultImg"src={result.img} alt={result.imgAlt}></img>
                </div>
            </div>
        </div>
    )
}

export default QuizResults;