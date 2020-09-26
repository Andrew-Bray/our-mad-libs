// THESE ARE INPUTS
const noun1 = document.getElementById("noun1");
const noun2 = document.getElementById("noun2");
const noun3 = document.getElementById("noun3");
const verb1 = document.getElementById("verb1");
const number1 = document.getElementById("number1");
const adjective1 = document.getElementById("adjective1");
const number2 = document.getElementById("number2");
//const number2a = document.getElementById("number2a");
const adjective3 = document.getElementById("adjective3");
const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");


// THESE ARE OUTPUTS/SPANS
const outputNoun1 = document.getElementById("output-noun1");
const outputNoun1a = document.getElementById("output-noun1a");
const outputNoun2 = document.getElementById("output-noun2");
const outputNoun1b = document.getElementById("output-noun1b");
const outputNoun3 = document.getElementById("output-noun3");
const outputVerb1 = document.getElementById("output-verb1");
const outputNumber1 = document.getElementById("output-number1");
const outputNoun1c = document.getElementById("output-noun1c");
const outputAdjective1 = document.getElementById("output-adjective1");
const outputNumber2 = document.getElementById("output-number2");
const outputNumber2a = document.getElementById("output-number2a");
const outputAdjective3 = document.getElementById("output-adjective3");

// grabbing divs by id

const inputForm = document.getElementById("input-form");
const outputForm = document.getElementById("output-form");
const machinePicture = document.getElementById("machine-picture");

// issues: injecting the first number into the first noun;
// though the second repeat noun accurately repeats in the third slot

function validateInput() {
  if (noun1.value === "" ||
    noun2.value === "" ||
    noun3.value === "" ||
    verb1.value === "" ||
    number1.value === "" ||
    adjective1.value === "" ||
    number2.value === "" ||
    adjective3.value === ""
  ){
    alert("You left one blank!")
  } else {
    createPoem();
  }
}



function createPoem() {
    // replacing the text content of the output with the input value
    outputNoun1.textContent = noun1.value;
    outputNoun1a.textContent = noun1.value;
    outputNoun1b.textContent = noun1.value;
    outputNoun1c.textContent = noun1.value;
    outputNoun2.textContent = noun2.value;
    outputNoun3.textContent = noun3.value;
    outputVerb1.textContent = verb1.value;
    outputNumber1.textContent = number1.value;
    outputNumber2.textContent = number2.value;
    outputNumber2a.textContent = number2.value;
    outputAdjective1.textContent = adjective1.value;
    outputAdjective3.textContent = adjective3.value;
  
    // toggle class hidden and visible onsubmit
    inputForm.classList.toggle("hidden");
    outputForm.classList.toggle("hidden");
    outputForm.classList.add("poem-fadein");
    machinePicture.classList.add("img-fadein");
}

function resetPoem() {
  outputNoun1.textContent = "";
  outputNoun1a.textContent = "";
  outputNoun1b.textContent = "";
  outputNoun1c.textContent = "";
  outputNoun2.textContent = "";
  outputNoun3.textContent = "";
  outputVerb1.textContent = "";
  outputNumber1.textContent = "";
  outputNumber2.textContent = "";
  outputNumber2a.textContent = "";
  outputAdjective1.textContent = "";
  outputAdjective3.textContent = "";

  // toggle class hidden and visible onreset
  inputForm.classList.toggle("hidden");
  outputForm.classList.toggle("hidden");
  outputForm.classList.remove("poem-fadein");

  machinePicture.classList.remove("img-fadein");
}

submitButton.addEventListener("click", validateInput);

resetButton.addEventListener("click", resetPoem);


