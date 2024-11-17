// Task 2: Need to create a Javascript function for the sum of string (Example like "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9")

function sumOfString(str) {
    return str
        .split(',')                   
        .map(Number)                  
        .reduce((sum, num) => sum + num, 0); 
}


const inputString = "1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9";
console.log("Sum of numbers:", sumOfString(inputString)); 
