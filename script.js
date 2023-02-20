//My global variables

var generateBtn = document.querySelector("#generate");

var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

var numbers = "0123456789".split(""); // .split method seperates string into arrays
var specialC = "!@#$%^&*()_".split("");

function generatePassword() {
  //My function that gets called on to run the password generator
  // console.log("Hey you clicked the button"); //made this a habit to make sure when I click a button, stuff is connected by confirming via the console

  //Psuedo Code:
  //1. Prompt the user for the password criteria
  //    a. password length 8<128
  //    b. types: lowercase, uppercase, numeric, or special
  //2. Validate the input. Maker sure password length is 8>128, and that at least one type is selected
  //3. Generate password based on criteria

  var passwordLength = ""; //my password length variable which I pass on an empty string value bc it will contain a new value once user selects how long they want their password to be
  var passwordLength = prompt(
    //Prompts the user on how many characters they want
    "How many characters do you want your password to be? (8 - 128 characters)."
  );

  //Message shown when employee selects wrong min or wrong max character length
  while (passwordLength <= 7 || passwordLength >= 129) {
    alert(
      "Password length must be between 8 - 128 characters. Please try again."
    );
    var passwordLength = prompt(
      "How many characters do you want your password to be? (8 - 128 characters)."
    );
  }

  //Message shown when password length is accepted
  alert("Your password length will be " + passwordLength + " characters.");

  //Ask user what characters should be use

  var addNumbers = confirm(
    "Should Password include number characters? Press 'OK' to add and 'Cancel' to remove."
  );
  var addUpper = confirm(
    "Should Password include uppercase characters? Press 'OK' to add and 'Cancel' to remove."
  );
  var addLower = confirm(
    "Should Password include lowercase characters? Press 'OK' to add and 'Cancel' to remove."
  );
  var addSpecial = confirm(
    "Should Password include lowercase characters? Press 'OK' to add and 'Cancel' to remove."
  );

  //if user does not select any criteria
  while (
    //while loop that goes through each character criteria when false, and if false === alerts User that they must select one type and prompts the user again with criteria
    addNumbers === false &&
    addUpper === false &&
    addLower === false &&
    addSpecial === false
  ) {
    alert("You must select one type of criteria to generate password");
    //prompts the user again with criteria
    var addNumbers = confirm(
      "Should Password include number characters? Press 'OK' to add and 'Cancel' to remove."
    );
    var addUpper = confirm(
      "Should Password include uppercase characters? Press 'OK' to add and 'Cancel' to remove."
    );
    var addLower = confirm(
      "Should Password include lowercase characters? Press 'OK' to add and 'Cancel' to remove."
    );
    var addSpecial = confirm(
      "Should Password include lowercase characters? Press 'OK' to add and 'Cancel' to remove."
    );
  }

  //Empty array that is created which will gain values once criteria is determined
  var selectedArray = [];

  if (addNumbers === true) {
    selectedArray = selectedArray.concat(numbers); //concat method allows me to merge two or more arrays
  } // pass on the number characters to the empty selected array if it is true/selected

  if (addUpper === true) {
    selectedArray = selectedArray.concat(upperCase); //For each array I have to recall the selectedArray because If I don't the concat method will only output the original empty array
  } // pass on the upperCase characters to the selected array with number characters if it is true/selected

  if (addLower === true) {
    selectedArray = selectedArray.concat(lowerCase);
  } // pass on the lower case characters to the selected array with numbers & Upper case characters if it is true/selected

  if (addSpecial === true) {
    selectedArray = selectedArray.concat(specialC);
  } // pass on the special characters to the  selected array that contains all other selected criteria if it is true/selected

  //Here is where I create the steps to randomized all selected criteria
  var randomPassword = ""; //start with creating a random PAssword var with an empty value because it will gain a new one once the for loop takes place with criteria selected

  for (var i = 0; i < passwordLength; i++) {
    //
    randomPassword =
      randomPassword +
      selectedArray[Math.floor(Math.random() * selectedArray.length)]; //applies the randomized value of selected criteria to the empty random Password variable I created
  }
  //4. Display password on the page
  return randomPassword; //returns the random/Users Password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generatePassword is what I need to create
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
