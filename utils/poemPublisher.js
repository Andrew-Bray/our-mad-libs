export function createPoem() {
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
    outputAdjective2.textContent = adjective2.value;
    outputAdjective3.textContent = adjective3.value;

  // toggle class hidden and visible onsubmit
    inputForm.classList.toggle('hidden');
    outputForm.classList.toggle('hidden');
    outputForm.classList.toggle('poem-fadein');
    machinePicture.classList.toggle('img-fadein');
}
