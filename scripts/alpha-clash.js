// function play(){
//     // step-1: hide the home screen. to hide the screen add the class hidden to the home section
//     const homeSection=document.getElementById('home-screen');
//     homeSection.classList.add('hidden')

//     // show the play ground
//     const playgroundSection=document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
    
// }


function handleKeyboardKeyUpEvent(event){
    const playerPressed=event.key;
    
    const currentAlphabetElement=document.getElementById('current-alphabet');
    const currentAlphabet=currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        // const currentScoreElement=document.getElementById('current-score');
        // const currentScoreText=currentScoreElement.innerText;
        // const currentScore=parseInt(currentScoreText);
        const currentScore=getTextElementValueById('current-score');

        const updatedScore=currentScore+1;

        // currentScoreElement.innerText=newScore;
        setTextElementValueById('current-score',updatedScore);

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        // const currentLifeElement=document.getElementById('current-life');
        // const currentLifeText=currentLifeElement.innerText;
        // const currentLife=parseInt(currentLifeText);
        const currentLife=getTextElementValueById('current-life');
        
        // const newLife=currentLife-1;
        const updatedLife=currentLife-1;

        // currentLifeElement.innerText=newLife;
        setTextElementValueById('current-life',updatedLife);

    }
}
document.addEventListener('keyup',handleKeyboardKeyUpEvent);


function continueGame(){
    const alphabet = getARandomAlphabet();

    const currentAlphabetElement=document.getElementById('current-alphabet');
    currentAlphabetElement.innerText=alphabet;

    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}