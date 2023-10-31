// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];








// Function to prompt user for password options
// return the array that contains all the possible characters based on user's preferences
// or perhaps return an object
// for example, { length: 50, lowercase: true, uppercase: false, numeric: true, special: false }
function getPasswordOptions() {
  // start with an empty array
  var emptyArray = [];

  var confirmPassword = confirm("Lets generate a password");
  // use the prompt function to ask the user
  var passwordLength = parseInt(prompt("Pick a password length between 8-128"));
  // use if statements to evaluate if user has met criteria
  if (passwordLength >= 8 && passwordLength <= 128) {
    alert("Correct password length");
  } else {
    alert("Please pick a password length between 8-128");
    getPasswordOptions();
  }
  //   for example, ensure that the input is a number between 8 and 128, inclusive
  //   Use "Number" to convert a string to a number
  //     like
  //           var userLength = prompt("how long?")
  //           userLength = Number(userLength)
  //     or
  //           userLength = parseInt(userLength)
  //     or
  //           userLength = +userLength
  // 
  // store what user says on confirms/alerts
  // use confirm statements
  //   if confirm returns true, push some information about the character set into the array
  //   ['lowercase', 'uppercase']
  //   ['lowercase', 'symbols']
  //   ['a','b','c','d',.......,'A','B','C']
  //   though it would be dodgy, append the length
  return { length: 50, lowercase: true, uppercase: false, numeric: true, special: false };
}

// Function for getting a random element from an array
function getRandom(arr) {
  ['a','b','c','d','e']
   // build an array of all possible options based on user preferences
   // user wants 20 characters in their password
   //   upper/lower/numeric ==> 26 + 26 + 10 = 62

}

// Function to generate password with user input
function generatePassword() {
  // get the password options
  console.log("Hey you clicked the button");
  var options = getPasswordOptions();

  // connect all the arrays that the user said they want to use
  // use conditionals to choose which arrays to concatenate
  // for example, if they want the special characters and the lowercase characters,
  //    put those arrays together

  // use the user's input for length to generate that number of random elements from the array
  // MAYBE TOO COMPLICATED: divide the user requested length by the number of different character classes so that
  //    the password is evenly divided among the types of characters
  // BUT CONSIDER
  //    How do we ensure that the password contains at least one of each character type
  //    How important is that?
  // get the random one


  // need to loop => the number of times the user requested for a length of a password!

  // this function must RETURN the generated password as a string
  return "Generate password will go here!";
}


















// // Function to prompt user for password options
// function getPasswordOptions() {

// }

// // Function for getting a random element from an array
// function getRandom(arr) {

// }

// // Function to generate password with user input
// function generatePassword() {

// }

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);










