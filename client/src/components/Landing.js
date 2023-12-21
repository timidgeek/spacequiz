import hero from '../images/hero_logo.png';
import './Landing.css';
import { LogInOverlay, SignUpOverlay } from './LandingOverlays.js'
import Quiz from './Quiz.js';
import './notLoggedIn.css'

function Landing() {
  function turnOnOverlay() {
    window.scrollTo(0,0);
    document.querySelector(".overlayWrapper").style.display = "flex";
  }
  function turnOnSignUp() {
    window.scrollTo(0,0);
    document.querySelector(".overlayWrapper#signUp").style.display = "flex";
  }
  function takeOurQuiz() {
    window.scrollTo(0,650);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={hero} className="hero-logo" alt="are you: Lost in Space?" />
        <button className="primary cta"onClick={takeOurQuiz}>Take Our Quiz!</button>
        <div id="quizWrapper">
          <Quiz />
        </div>
        <div className="notLoggedInButtons">
          <button className="primary" onClick={turnOnOverlay}>Log in</button>
          <p>or</p>
          <button className="secondary" onClick={turnOnSignUp}>Sign up</button>
        </div>
      </header>
      <LogInOverlay />
      <SignUpOverlay />
    </div>
  );
}


export default Landing;
