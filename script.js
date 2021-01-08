//Prompt How many characters would you like your passoword to be? (Please input a number from 8-128)
//var to Confirm each upperCase, lower case, numbers, special characters
//Alert click generate button to begin
//Take the value entered and generate a password using math.random() from the options, use conditions if each option chosen
//need object with 4 properties for each password options



// password options object
var characterOps = {
  upperCase:["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  lowerCase: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  numbers : ["0","1","2","3","4","5","6","7","8","9"],
  specialCase: ["~","!","@","#","$","%","^","&","*","(",")","_","+"],
  

  upper : true,
  lower : true,
  number : true,
  special : true,


    all : false,
    noUp: false,
    noLow: false,
    noNum: false,
    noSpec: false,
    upperLower: false,
    upperNumber: false,
    upperSpecial: false,
    lowerNumber: false,
    lowerSpecial: false,
    numberSpecial: false,
    upOnly: false,
    lowOnly: false,
    numOnly: false,
    specOnly: false,
}

var userSel = prompt("How many characters would you like your password to be? (Please enter a number from 8-128)")


var confirmOptions = {
    allIn: function () {
      alert("Your password will contain " + userSel + " uppercase letters, lowercase letters, numbers, and special characters.");
    },
    noUpper: function() {
      alert("Your password will contain " + userSel + "  lowercase letters, numbers, and special characters");
    },
    noLower: function (){ alert("Your password will contain " + userSel + "  uppercase letters, numbers, and special characters")
    },
    noNumber: function (){ alert("Your password will contain " + userSel + "  uppercase letters, lowercase letters, and special characters")
    },
    noSpecial: function (){ alert("Your password will contain " + userSel + "  uppercase letters, lowercase letters, and numbers")
    },
    noUpperNoLower: function(){ alert("Your password will contain " + userSel + "  numbers, and special characters")
    },
    noUpperNoNumber: function (){ alert("Your password will contain " + userSel + "  lowercase letters, and special characters")
    },
    noUpperNoSpecial: function (){ alert("Your password will contain " + userSel + "  lowercase letters, and numbers")
    },
    noLowerNoNumber: function (){ alert("Your password will contain " + userSel + "  uppercase letters and special characters")
    },
    noLowerNoSpecial: function () { alert("Your password will contain " + userSel + "  uppercase letters, and numbers")
    },
    noNumberNoSpecial : function (){ alert("Your password will contain " + userSel + "  uppercase letters, and lowercase letters")
    },
    upperOnly: function () { alert("Your password will contain " + userSel + " uppercase letters")
    },
    lowerOnly: function () { alert("Your password will contain " + userSel + "  lowercase letters")
    },
    numberOnly: function () { alert("Your password will contain " + userSel + " numbers")
    },
    specialOnly: function () { alert("Your password will contain " + userSel + " special characters")
    },
  }
  

  

function passwordOptions() {
    userSel;

  if (userSel <=7 || userSel >=129){ 
      alert("Password length must be between 8-128 characters, try again!")
    }
    else {
      alert("Please choose the character types to be included in your password (minimum one character type)")
      var confirmUpper = confirm("Will your password contain uppercase letters?")
      if (confirmUpper === false) {
        characterOps.upper = false
      }
      var confirmlower = confirm("Will your password contain lowercase letters?")
      if (confirmlower === false) {
        characterOps.lower = false
      }
      var confirmNum = confirm("Will your password contain numbers?")
      if (confirmNum === false) {
        characterOps.number = false
      }
      var confirmSpec = confirm("Will your password contain special characters?")
      if (confirmSpec === false) {
        characterOps.special = false
      }
      if (characterOps.upper === true && characterOps.lower === true && characterOps.number === true && characterOps.special === true) {
        confirmOptions.allIn();
        characterOps.all = true
       }
      else if (characterOps.upper !== true && characterOps.lower === true && characterOps.number === true && characterOps.special === true) {
      confirmOptions.noUpper();
      characterOps.noUp = true
       }
     else if (characterOps.upper !== true && characterOps.lower !== true && characterOps.number === true && characterOps.special === true) {
      confirmOptions.noUpperNoLower();
      characterOps.numberSpecial = true
       }
     else if (characterOps.upper !== true && characterOps.lower === true && characterOps.number !== true && characterOps.special === true) {
      confirmOptions.noUpperNoNumber();
      characterOps.lowerSpecial = true
      }
     else if (characterOps.upper !== true && characterOps.lower === true && characterOps.number === true && characterOps.special !== true) {
      confirmOptions.noUpperNoSpecial();
      characterOps.lowerNumber = true
       }
     else if (characterOps.upper === true && characterOps.lower !== true && characterOps.number === true && characterOps.special === true) {
      confirmOptions.noLower();
      characterOps.noLow = true
     }
     else if (characterOps.upper === true && characterOps.lower !== true && characterOps.number !== true && characterOps.special === true) {
      confirmOptions.noLowerNoNumber();
      characterOps.upperSpecial = true
      }
     else if (characterOps.upper === true && characterOps.lower !== true && characterOps.number === true && characterOps.special !== true) {
      confirmOptions.noLowerNoSpecial();
      characterOps.upperNumber = true
     }
     else if (characterOps.upper === true && characterOps.lower === true && characterOps.number !== true && characterOps.special !== true) {
      confirmOptions.noNumber();
      characterOps.noNum = true
     }
      else if (characterOps.upper === true && characterOps.lower === true && characterOps.number !== true && characterOps.special !== true) {
      confirmOptions.noNumberNoSpecial();
      characterOps.upperLower = true
      }
      else if (characterOps.upper === true && characterOps.lower === true && characterOps.number === true && characterOps.special !== true) {
      confirmOptions.noSpecial();
      characterOps.noSpec = true
     }
     else if (characterOps.upper === true && characterOps.lower !== true && characterOps.number !== true && characterOps.special !== true) {
      confirmOptions.upperOnly();
      characterOps.upOnly = true
     }
     else if (characterOps.upper !== true && characterOps.lower === true && characterOps.number !== true && characterOps.special !== true) {
      confirmOptions.lowerOnly();
      characterOps.lowOnly = true
      }
      else if (characterOps.upper !== true && characterOps.lower !== true && characterOps.number === true && characterOps.special !== true) {
      confirmOptions.numberOnly();
      characterOps.numOnly = true
      }
      else if (characterOps.upper !== true && characterOps.lower !== true && characterOps.number !== true && characterOps.special === true) {
      confirmOptions.specialOnly();
      characterOps.specOnly = true
     }
     else {
      alert("Your password must contain at least one of the following: uppercase letters, lowercase letters, numbers, and special characters!")
       }  
   }
  }
 
// password options
   var allCharacters = ( 
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var noUpper = (
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var noLower = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var noNumbers = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var noSpecial = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)] 
    );
   var upperLower = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] 
   );
   var upperNumber = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)]
    );
   var upperSpecial = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var lowerNumber = (
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)]
   );
   var lowerSpecial = (
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var numberSpecial = (
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)] +
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
   var upperOnly = (
    characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)]
   );
   var lowerOnly = (
    characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)]
   );
   var numberOnly = (
    characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)]
   );
   var specialOnly = (
    characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)]
   );
  
function generatePassword () {
   for (i = 0; i = userSel; i++){
    if (characterOps.all = true) {
      allCharacters
    };
    if (characterOps.noUp = true) {
      noUpper
    };
    if (characterOps.noLow = true) {
      noLower
    };
    if (characterOps.noNum = true) {
      noNumbers
    };
    if (characterOps.noSpec = true) {
      noSpecial
    };
    if (characterOps.upperLower = true) {
      upperLower
    };
    if (characterOps.upperNumber = true) {
      upperNumber
    };
    if (characterOps.upperSpecial = true) {
      upperSpecial
    };
    if (characterOps.lowerNumber = true) {
      lowerNumber
    };
    if (characterOps.lowerSpecial = true) {
      lowerSpecial
    };
    if (characterOps.numberSpecial = true) {
      numberSpecial
    };
    if (characterOps.upOnly = true) {
      upperOnly
    };
    if (characterOps.lowOnly = true) {
      lowerOnly
    };
    if (characterOps.numOnly = true) {
      numberOnly
    };
    if (characterOps.specOnly = true) {
      specialOnly
    };
  }
}

console.log(userSel);
 passwordOptions();
console.log(generatePassword);

 
 
  //  function allCharacters() { for (i = 0; i <=userSel; i++){
  //   characterOps.upperCase[Math.floor(Math.random()*characterOps.upperCase.length)] +
  //   characterOps.lowerCase[Math.floor(Math.random()*characterOps.lowerCase.length)] +
  //   characterOps.numbers[Math.floor(Math.random()*characterOps.numbers.length)] +
  //   characterOps.specialCase[Math.floor(Math.random()*characterOps.specialCase.length)] } }
    
    
// console.log(allCharacters)


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


