// 1
const onlyLatinLettersRegex = /^[a-zA-Z]+$/;

console.log(onlyLatinLettersRegex.test("word"));  

console.log(onlyLatinLettersRegex.test("World123"))

console.log(onlyLatinLettersRegex.test("Hello World")); 

console.log(onlyLatinLettersRegex.test(""));  

// 2

const onlyDigitsRegex = /^\d+$/; 

console.log(onlyDigitsRegex.test("12345")); 

console.log(onlyDigitsRegex.test("0"));      
console.log(onlyDigitsRegex.test("123a"));   
console.log(onlyDigitsRegex.test("123 45")); 
console.log(onlyDigitsRegex.test("1.23"));   
console.log(onlyDigitsRegex.test(""));       


// 3

const input = document.getElementById('username');
const btn = document.getElementById('submitButton');


const regex = /^[a-zA-Z0-9\u10A0-\u10FF]+$/u;

input.addEventListener('input', () => {
    
    btn.disabled = !regex.test(input.value);
});




