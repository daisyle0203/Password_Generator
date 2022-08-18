// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateEl = document.getElementById("generate")
var passwordEl = document.getElementById("password")

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+=";

// Confirm password length
function getLength() {
  var confirmLength = window.prompt("How many characters would you like in your password? (Please choose a number between 8-128).");
  
  if (confirmLength >= 8 && confirmLength <= 128) {
    return confirmLength;
  } else {
    window.confirm("Please enter a valid number.")
    return getLength();
  }
}

// Confirm characters
function getUpperCase() {
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function getLowerCase() {
  return lowerCase[Math.floor(Math.random() * lowerCase.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Generate password based on confirmed length and characters 
function generatePassword() {
  var passwordNew = "";

  var confirmLength = getLength();

  var confirmUpperCase = window.confirm("Would you like to use uppercase letters?");

  var confirmLowerCase = window.confirm("Would you like to use lowercase letters?");

  var confirmNumber = window.confirm("Would you like to use number?");
  
  var confirmSymbol = window.confirm("Would you like to use symbols letters?")

while(passwordNew.length < confirmLength) {
  var random = Math.floor(Math.random() * 4);

  switch(random) {
    case 0:
      if (confirmUpperCase) {
        passwordNew += getUpperCase();
      }
      break;
      case 1:
      if (confirmLowerCase) {
        passwordNew += getLowerCase();
      }
      break;
      case 2:
      if (confirmNumber) {
        passwordNew += getNumbers();
      } 
      break;
      case 3:
      if (confirmSymbol) {
        passwordNew += getSymbols();
      }
      break;
  }
}

console.log(passwordNew);
  return passwordNew;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
