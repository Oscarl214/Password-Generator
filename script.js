var lowercase = [
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
var upperCase = [
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
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialC = ["!", "#", "$", "%", "&", "'", "*", "+", ",", "-", ".", "/"];

// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Hey you clicked the button"); //make this a habit to make sure when you click a button you created that stuff is connected the way they should be connected

  //1. Prompt the user for the password criteria
  //    a. password length 8<128
  //    b. types: lowercase, uppercase, numeric, or special
  //2. Validate the input. Maker sure password length is 8>128, and that at least one type is selected
  //3. Generate password based on criteria

  var passwordLength = window.prompt(
    "How long do you want your password to be?(8 min- 128 max)"
  );
  var passwordLowercase = window.prompt(
    "Do you you want your password to include lowercase letters?(Press Cancel for No)"
  );
  var passwordUppercase = window.prompt(
    "Do you want your password to include uppercase letters?(Press Cancel for No)"
  );
  var passwordSpecial = window.prompt(
    "Do you want your password to include special characters?(Press Cancel for No)"
  );
  //4. Display password on the page
  return "Generated Password"; //write my code and return my generated password which I will create as a variable
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generatePassword is what I need to create
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
