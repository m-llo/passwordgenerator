
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCase = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input - last thing to do
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

}

function generatePassword() {
    var criteria = getUserInput();
    console.log(criteria)
    var password = "";
    for (var i = 0; i < criteria.passwordLength; i++) {
        if (criteria.confirmUpper === true) {

            var randomUp = upperCase[Math.floor(Math.random() * upperCase.length)]
            password = password + randomUp
        }

        if (criteria.confirmLower === true) {
            var randomLow = lowerCase[Math.floor(Math.random() * lowerCase.length)]
            password = password + randomLow
        }
        
        if (criteria.confirmNum === true) {
            var randomNum = numbers[Math.floor(Math.random() * numbers.length)]
            password = password + randomNum
        }
       
        if (criteria.confirmSpec === true) {
            var randomSpec = specialCase[Math.floor(Math.random() * specialCase.length)]
            password = password + randomSpec
        }
    }
    var finalPassword = ""
    for (var i = 0; i < criteria.passwordLength; i++) {
        var randomFin = password[Math.floor(Math.random() * password.length)]
        finalPassword = finalPassword + randomFin
    }
    return finalPassword;
}

function getUserInput() {
    var passwordLength = prompt("How many characters would you like your password to be? (Please enter a number from 8-128)")
    if (passwordLength <= 7 || passwordLength >= 129) {
        alert("Password length must be between 8-128 characters, try again!");
        return getUserInput();
    }
    var confirmUpper = confirm("Will your password contain uppercase letters?")
    var confirmLower = confirm("Will your password contain lowercase letters?")
    var confirmNum = confirm("Will your password contain numbers?")
    var confirmSpec = confirm("Will your password contain special characters?")
    return {
        passwordLength,
        confirmUpper,
        confirmLower,
        confirmNum,
        confirmSpec,

    }
}
