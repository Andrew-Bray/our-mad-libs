import { createPoem } from './poemPublisher.js';
import { resetBorders } from './reset.js';

export function validateInput() {
    let counter = 0;
    let message = '';

    resetBorders();

    if (noun1.value === ''){
        counter++;
        noun1.style.border = '2px solid red';
    }
    if (noun2.value === ''){
        counter++;
        noun2.style.border = '2px solid red';
    }
    if (noun3.value === ''){
        counter++;
        noun3.style.border = '2px solid red';
    }
    if (verb1.value === ''){
        counter++;
        verb1.style.border = '2px solid red';
    }
    if (number1.value === ''){
        counter++;
        number1.style.border = '2px solid red';
    }
    if (adjective1.value === ''){
        counter++;
        adjective1.style.border = '2px solid red';
    }
    if (adjective2.value === ''){
        counter++;
        adjective2.style.border = '2px solid red';
    }
    if (number2.value === ''){
        counter++;
        number2.style.border = '2px solid red';
    }
    if (adjective3.value === ''){
        counter++;
        adjective3.style.border = '2px solid red';
    }

    if (counter === 1){
        message = 'You left 1 field blank!';
        alert(message);
    } else if (counter > 1){
        message = 'You left ' + counter + ' fields blank!';
        alert(message);
    } else {
        createPoem();
    } 
}