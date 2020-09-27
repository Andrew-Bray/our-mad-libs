import { createPoem } from './poemPublisher.js';

export function validateInput() {
    if (noun1.value === 'test'){
        createPoem();
    }  
    else if (noun1.value === '' ||
      noun2.value === '' ||
      noun3.value === '' ||
      verb1.value === '' ||
      number1.value === '' ||
      adjective1.value === '' ||
      number2.value === '' ||
      adjective3.value === ''
    ){
        alert('You left one blank!');
    } else {
        createPoem();
    }
}

  