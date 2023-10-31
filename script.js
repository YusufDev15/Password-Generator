var passwordLength = "";
var choiceArr = [];
// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPasswordOptions(); //either true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  }
}

// Function to generate password with user input
function generatePassword() {
  // generate password based on prompts
  var password = ""; //empty string
  //for loop on the password length picked by the user

  // use the user's input for length to generate that number of random elements from the array
  for (var i = 0; i < passwordLength; i++) {
    // connect all the arrays that the user said they want to use
    var randomIndex = Math.floor(Math.random() * choiceArr.length);
    // password = password + choiceArr[randomIndex]; this is the same syntax
    password += choiceArr[randomIndex];
  }
  return password;
}

// Function to prompt user for password options
// return the array that contains all the possible characters based on user's preferences
// or perhaps return an object
function getPasswordOptions() {
  // start with an empty array
  choiceArr = [];
  var confirmPassword = confirm("Lets generate a password");
  // use the prompt function to ask the user
  // use if statements to evaluate if user has met criteria
  // store what user says on confirms/alerts
  //this is already defined at the top of the page
  passwordLength = parseInt(prompt("Pick a password length between 8-128"));
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    //This if statement has to be false
    alert("Please pick a password length between 8-128");
    return false;
    // getPasswordOptions();
  }
  // use confirm statements
  var hasLowercase = confirm("Include Lowercase Characters?");
  if (hasLowercase) {
    choiceArr = choiceArr.concat(lowerCasedCharacters);
  }
  var hasUppercase = confirm("Include Uppercase Characters?");
  if (hasUppercase) {
    choiceArr = choiceArr.concat(upperCasedCharacters);
  }
  var hasNumeric = confirm("Include Numeric Characters?");
  if (hasNumeric) {
    choiceArr = choiceArr.concat(numericCharacters);
  }
  var hasSpecial = confirm("Include Special Characters?");
  if (hasSpecial) {
    choiceArr = choiceArr.concat(specialCharacters);
  }
  if (!hasLowercase && !hasUppercase && !hasNumeric && !hasSpecial) {
    alert("You must pick at least one character set");
    return getPasswordOptions();
  }
  //   if confirm returns true, push some information about the character set into the array
  return true;
}
