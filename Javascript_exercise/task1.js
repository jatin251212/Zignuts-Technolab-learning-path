// Task 1: Need to create JavaScript functions for a sum of numbers in the string (Example like “foo8bar8cat2tc2”)


function sumOfNumbersInString(str) {
    const numbers = str.match(/\d+/g).map(Number);
    
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    
    return sum;
}

const inputString = "foo8bar8cat2tc2r4";
console.log("Sum of numbers:", sumOfNumbersInString(inputString)); 


