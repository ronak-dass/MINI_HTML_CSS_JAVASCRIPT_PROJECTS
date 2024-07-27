const lowerCaseLetter = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

const lengthEl = document.getElementById('length');
const lowercaseEl = document.getElementById('lowercase');
const uppercaseEl = document.getElementById('uppercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const passwordEl = document.getElementById('password')

generateBtn.addEventListener('click', () => {

    const length = lengthEl.value;
    // console.log(length);

    let characters = "";
    let password = "";

    if(lowercaseEl.checked){
        characters += lowerCaseLetter;
        console.log(characters);
    }

    if(uppercaseEl.checked){
        characters += upperCaseLetter;
    }

    if(numbersEl.checked){
        characters += numbers;
    }

    if(symbolsEl.checked){
        characters += symbols;
    }

    console.log(characters);

    for (let i = 0; i < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length))
        console.log(password);
    }

    passwordEl.value = password

})
