import QuizQuestionComponent from './quizQuestion.js';
import './notLoggedIn.css'
import quizData from './quizData.js';
import QuizResults from './quizResults.js'
import TempAllResults from './tempAllResults.js';
import React, { useState } from "react";
import determineResult from "./quizlogic.js";

const questionOne = quizData[0];
const remainingQuestions = quizData.slice(1);
function Quiz() {
    function handleQuizSubmit() {
        const answers = [];
        let totalScore = 0;
        document.querySelectorAll(".selected").forEach(answer => {
            let ourDiv = document.getElementById(answer.id);
            let putTogether = {
                answer: ourDiv.querySelector("p").innerHTML,
                weight: ourDiv.querySelector("input").value,
            }
            answers.push(putTogether);
        });
        answers.forEach(answer => {
            totalScore += parseInt(answer.weight);
        });
        let result = determineResult(totalScore);
        document.getElementById(result).style.display = "flex";
        window.scrollTo(0, document.body.scrollHeight);
        console.log(determineResult(totalScore));
    }

    return (
        <div>
            <QuizQuestionComponent question={questionOne}/>
            <div className="notLoggedInWrapper">
                <div className="notLoggedIn"></div>
            </div>
            <div className="loggedInWrapper" style={{display: "none"}}>
                {remainingQuestions.map(question => {return <QuizQuestionComponent question={question}/>})}
                <button className="primary cta" onClick={handleQuizSubmit}>Submit Results!</button>
                <TempAllResults />
            </div>

        </div>
    );
}

export default Quiz;