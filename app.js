import { validateInput } from './utils/clickHandlers.js';
import { resetPoem } from './utils/reset.js';


submitButton.addEventListener("click", validateInput);
resetButton.addEventListener("click", resetPoem);


