
export function resetPoem() {
    //resets output values to ""
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

    //reset input values to ""
    noun1.value = '';
    noun2.value = '';
    noun3.value = '';
    verb1.value = '';
    number1.value = '';
    adjective1.value = '';
    number2.value = '';
    adjective3.value = '';

    // toggle class hidden and visible onreset
    inputForm.classList.toggle("hidden");
    outputForm.classList.toggle("hidden");
    outputForm.classList.toggle("poem-fadein");
    machinePicture.classList.toggle("img-fadein");
}
