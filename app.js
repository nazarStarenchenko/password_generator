const outputField = document.getElementById("password");

const passwordLengthInput = document.getElementById("length");
const lowerCaseCheckbox = document.getElementById("lowercase-letters");
const upperCaseCheckbox = document.getElementById("uppercase-letters");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const submitButton = document.querySelector("button");

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

//return input object from the user
function readFormInput() {
  const inputObj = {};

  inputObj.passwordLength = passwordLengthInput.value;
  inputObj.containsLowerCase = lowerCaseCheckbox.checked;
  inputObj.containsUpperCase = upperCaseCheckbox.checked;
  inputObj.containsNumbers = numbersCheckbox.checked;
  inputObj.containsSymbols = symbolsCheckbox.checked;

  return inputObj;
}

//this function takes generated symbols from generateSymbol function 
//and combines them into one password string
function generatePassword (inputObj) {
  let password = "";

  for (let i = 0; i < inputObj.passwordLength; i++) {
    const x = generateSymbol(inputObj);
    password += x;
  }

  return password;
}

//this function generates one symbol based on used input
function generateSymbol(inputObj) {
  const symbolArray = [];
  if (inputObj.containsUpperCase) {
    symbolArray.push(getUppercase());
  }

  if (inputObj.containsLowerCase ) {
    symbolArray.push(getLowercase());
  }

  if (inputObj.containsNumbers) {
    symbolArray.push(getNumber());
  }

  if (inputObj.containsSymbols) {
    symbolArray.push(getSymbol());
  }

  if (symbolArray.length === 0) return "";

  return symbolArray[Math.floor(Math.random() * symbolArray.length)];
}


/* functions used to get only one random number from either Lowercase/uppercase
letters string, numbers string or symbols string*/
function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumber() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}


//event listener for generate button
submitButton.addEventListener("click", () => {
  let generatedPassword = generatePassword(readFormInput());
  console.log(generatedPassword);
  outputField.innerText = generatedPassword;
});