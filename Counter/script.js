const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');
const randomBtn = document.getElementById('random');
const counterDisplay = document.getElementById('count');
const guessBtn = document.getElementById('guessBtn');


let counter = 0;

increaseBtn.onclick = function() {
    counter++;
    counterDisplay.textContent = counter;
}

decreaseBtn.onclick = function() {
    counter--;
    counterDisplay.textContent = counter;
}

resetBtn.onclick = function() {
    counter = 0;
    counterDisplay.textContent = counter;
}

randomBtn.onclick = function() {
    counter = Math.floor(Math.random() * (100 - 1)) + 1;
    counterDisplay.textContent = counter;
}

let answer = Math.floor(Math.random() * 100 - 1 + 1) + 1;
let attempts = 0;
let guess;

guessBtn.onclick = function() {
    guess = document.getElementById('guessInput').value;

      if (guess < 1 || guess > 100) {
        document.getElementById('feedback').textContent = "Please enter a number between 1 and 100.";
      } else if (guess < answer) {
        attempts++;
        document.getElementById('feedback').textContent = "Too low! Try again.";
      } else if (guess > answer) {
        attempts++;
        document.getElementById('feedback').textContent = "Too high! Try again.";
      } else {
        attempts++;
        document.getElementById('feedback').textContent = `Congratulations! You've guessed the number ${answer} in ${attempts} attempts.`;
        attempts = 0; // Reset attempts for a new game
        document.getElementById('guessInput').value = ''; // Clear input field
        // Generate a new random number for the next game
        answer = Math.floor(Math.random() * 100 - 1 + 1) + 1;
      }
}

//Generate random password

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : '';
    allowedChars += includeUppercase ? uppercaseChars : '';
    allowedChars += includeNumbers ? numbers : '';
    allowedChars += includeSymbols ? symbols : '';

      for (let i = 0; i < length; i++) {
        password += allowedChars.charAt(Math.floor(Math.random() * allowedChars.length));
      }
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const generatedPassword = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
document.getElementById('generatePassword').onclick = function() {
    document.getElementById('passwordDisplay').textContent = generatedPassword;
}
