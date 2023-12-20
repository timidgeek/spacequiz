
import './quizResults.css';


function QuizResults(props) {
    const result = props.result;
    return (
        <div className="quizResultsWrapper">
            <h1 className="quizResultsHeader">You are: <span >{result.result}</span></h1>
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