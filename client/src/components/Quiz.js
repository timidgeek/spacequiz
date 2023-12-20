import QuizQuestionComponent from './quizQuestion.js';
import './notLoggedIn.css'
import quizData from './quizlogic.js';
import QuizResults from './quizResults.js'
import TempAllResults from './tempAllResults.js';

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
                <button className="primary cta">Submit Results!</button>
                <TempAllResults />
            </div>

        </div>
    );
}

export default Quiz;