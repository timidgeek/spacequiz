import QuizResults from './quizResults';
import lostInSpace from "../images/404.jpg";
import holberton from "../images/holberton.jpg";
import sun from "../images/sun.jpg";
import uranus from "../images/uranus.jpg";

const possibleResults = [
    {
        result: "Lost in Space",
        text: "We regret to inform you that we can’t determine your current location. It appears that you are somewhere between here and there, leaning closer to far than near.  Don’t lose hope! Try to land safely, and  perhaps see our sister site,  Lost in Time?",
        img: lostInSpace,
        imgAlt: "Astronaut lost in space",
        id: "lost",
    },
    {
        result: "at Holberton ",
        text: "Welcome to the code galaxy! You've landed in the realm of endless possibilities, where algorithms roam free and bugs are mere shooting stars. Brace yourself for an odyssey of learning. Don't forget your space helmet—adventure awaits at every line of code.",
        img: holberton,
        imgAlt: "Holberton School",
        id: "holberton",
    },
    {
        result: "on The Sun",
        text: "Greetings, radiant traveler! You've stumbled upon the heart of our celestial neighborhood, where solar flares dance and light paints the cosmos. Take a cosmic dip in our scorching knowledge pool. Remember, in this realm, it's always sunny—let your curiosity shine!",
        img: sun,
        imgAlt: "The Sun",
        id: "sun",
    },
    {
        result: "on Uranus",
        text: "Ahoy, cosmic voyager! You've navigated to the seventh wonder of our galactic atlas. Here, where the sideways planet spins and storms brew, secrets of the outer realms unfold. Dive into the mysteries of this gas giant—prepare for an otherworldly experience!",
        img: uranus,
        imgAlt: "Uranus",
        id: "uranus",
    },
];

function TempAllResults() {
    return (
        <div>
            {possibleResults.map(result => {return <QuizResults result={result}/>})}
        </div>
    )

}

export default TempAllResults;