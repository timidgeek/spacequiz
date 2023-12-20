import QuizQuestionComponent from './quizQuestion.js';
import './notLoggedIn.css'
import quizData from './quizlogic.js';


const questionOne = quizData[0];
function Quiz() {
    return (
        <div>
            <div className="notLoggedInWrapper">
                <QuizQuestionComponent question={questionOne}/>
                <div className="notLoggedIn"></div>
            </div>
            <div className="loggedInWrapper" style={{display: "none"}}>
                {quizData.map(question => {return <QuizQuestionComponent question={question}/>})}
            </div>
        </div>
    );
}

export default Quiz;