import { validateInput } from './utils/clickHandlers.js';
import {resetPoem } from './utils/reset.js';


const submitButton = document.getElementById("submit");
const resetButton = document.getElementById("reset");


submitButton.addEventListener("click", validateInput);
resetButton.addEventListener("click", resetPoem);


