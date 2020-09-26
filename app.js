// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM


// THESE ARE INPUTS
const noun1 = document.getElementById('noun1');
const noun2 = document.getElementById('noun2');
const noun3 = document.getElementById('noun3');
const verb1 = document.getElementById('verb1');
const number1 = document.getElementById('number1');
const adjective1 = document.getElementById('adjective1');
const number2 = document.getElementById('number2');
const adjective2 = document.getElementById('adjective2');
const adjective3 = document.getElementById('adjective3');

const submitButton = document.getElementById('submit');
// Affected by the button click
const initVisible = document.getElementById('initially-visible');
const initInvisible = document.getElementById('initially-invisible');
const machinePicture = document.getElementById('machine-picture');


// THESE ARE OUTPUTS/SPANS
const outputNoun1 = document.getElementById('output-noun1');

const outputNoun1a = document.getElementById('output-noun1a');

const outputNoun2 = document.getElementById('output-noun2');

const outputNoun1b = document.getElementById('output-noun1b');

const outputNoun3 = document.getElementById('output-noun3');

const outputVerb1 = document.getElementById('output-verb1');

const outputNumber1 = document.getElementById('output-number1');

const outputNoun1c = document.getElementById('output-noun1c');

const outputAdjective1 = document.getElementById('output-adjective1');

const outputAdjective2 = document.getElementById('output-number2');

const outputNumber2a = document.getElementById('output-number2a');

const outputAdjective3 = document.getElementById('output-adjective3');



submitButton.addEventListener('click', () => {
    
    const value1 = noun1.value;
    outputNoun1.textContent = value1;
    
    const value2 = noun1.value;
    outputNoun1a.textContent = value2;

    const value3 = noun1.value;
    outputNoun1b.textContent = value3;

    const value4 = noun1.value;
    outputNoun1c.textContent = value4;

    const value5 = noun2.value;
    outputNoun2.textContent = value5;

    const value6 = noun3.value;
    outputNoun3.textContent = value6;

    const value7 = verb1.value;
    outputVerb1.textContent = value7;

    const value8 = number1.value;
    outputNumber1.textContent = value8;

    const value9 = number2.value;
    outputNoun1.textContent = value9;

    const value10 = number2.value;
    outputNumber2a.textContent = value10;

    const value11 = adjective1.value;
    outputAdjective1.textContent = value11;

    const value12 = adjective2.value;
    outputAdjective2.textContent = value12;

    const value13 = adjective3.value;
    outputAdjective3.textContent = value13;
   
// .4 second post-click time-delay. (you know, for style)
    setTimeout( function(){
// Classlist togglers to the two divs
        initInvisible.classList.toggle('hidden');
        initVisible.classList.toggle('hidden');
        initInvisible.classList.add('poem-format');
        machinePicture.classList.toggle('hidden');
        machinePicture.classList.toggle('fadein');
        machinePicture.classList.toggle('move-ne');

    }, 600);


})





