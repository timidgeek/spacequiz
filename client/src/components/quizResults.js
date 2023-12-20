import tempImg from "../images/404.jpg";
import './quizResults.css';
function QuizResults() {
    return (
        <div className="quizResultsWrapper">
            <h1 className="quizResultsHeader">You are: <span >Lost?</span></h1>
            <div className="quizResultsContentWrapper">
                <div className="quizResultsCopyWrapper">
                    <div>results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy results copy </div>
                </div>
                <div className="imgWrapper">
                    <img className="resultImg"src={tempImg}></img>
                </div>
            </div>
        </div>
    )
}

export default QuizResults;