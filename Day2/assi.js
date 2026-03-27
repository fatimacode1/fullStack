//Assignment
//Problem 1
/* 
valid
invalid
valid
invalid
valid
invalid
valid
invalid
*/

//Problem 2
{
    let userName = "Alice";
    let prize1st = 1000;
    let tota_cost = 250;
    let USER_AGE = 25;

} 

//Problem 3
{
    let userEmail = "john@example.com";
    let isLoggedIn = true;
    const maxAttempts = 3;
    let finalGrade = 85;
    let productPrice = 99.99;
}

//Problem 4;
{
let isRaining = false;
let isAdult = true;
let isMatch = false;
}

//Problem 5;
{
    let x = 10;
    console.log(typeof x); //number

    x = "Hello";
    console.log(typeof x); //string

    x = true;
    console.log(typeof x); //boolean   
}

//Problem 6
{
    let language = "JavaScript";

    console.log(language[0]); //J
    console.log(language[4]); //S
    console.log(language[language.length - 1]); //t
    console.log(language.length); //10
}

//Problem 7
{
    let message1 = "Hello";
    console.log(message1);
    let message2 = 'It\'s a sunny day';
    console.log(message2);
    let message3 = "He said, \"Hello!\"";
    console.log(message3);
    
}

//Problme 8

{
    let firstName = "Abdullah";
    let lastName = "Aziz";
    let fullName = firstName + " "+lastName;
    console.log(fullName);

    let greeting = "Hello, " + fullName;
    console.log(greeting);
    
    let age = 30;
    let info = fullName + " is " + age + " years old";
    console.log(info);
}

//Problem 9
{
let name = "Huda";
let score = 67;
let message = `Student ${name} scored ${score} points`;
console.log(message);


let product = "Laptop";
let price = 999;
let quantity = 2;
let total = price * quantity;
let receipt = `Item: ${product}, Quantity: ${quantity}, Total: ${total}`;
console.log(receipt);
}
//Problem 10
{
    let cityName = "Paris";
    let temperature = 25;
    let weather = `The temperature in ${cityName} is ${temperature} degrees`;
    console.log(weather);
    
    let hourOfDay = 14;
    let userName = "Bob";
    let greeting = `Good afternoon, Bob! It's ${hourOfDay}:00`;
    console.log(greeting);
    
}

//Problem 11
{
    let score;
    console.log(score); //undefined

    let winner = null;
    console.log(winner); //null

    let user = {name: "Alice"};
    console.log(user.age); //undefined
 
}

//Problem 12
{
    console.log(10 > 5); //true
    console.log(3 < 2); //false
    console.log(5 >= 5); //true
    console.log(8 <= 10); //true
    console.log(7 != 7); //false
    console.log(15 > 20); //false  
}

//Problem 13;
{
    let age = 18;
    let adult = age >= 18;
    console.log(adult); //true

    let temperature = 30;
    let hot = temperature >= 25;
    console.log(hot);

    let score = 75;
    let fail = score < 60;
    console.log(fail);  
}

//Problem 14
{
console.log(5 == 5); //true
console.log(5 === 5); //true
console.log(5 == "5"); //true
console.log(5 === "5"); //false
console.log(true == 1); //true
console.log(true === 1); //false
console.log(0 == false); //true
console.log(0 === false); //false
    
}

//Problem 15
{
let userInput = "10";
if (userInput === "10") {
 console.log("Input is 10");
}
}
//Problem 16
{
console.log('a' > 'A'); //true
console.log('b' < 'c'); //true
console.log('apple' < 'banana'); //true
console.log('Z' < 'a'); //true
console.log("10" < "2"); //true

}

//Problem 17

{
let str1 = "Hello";
let str2 = "HELLO";

let compare = str1.toLowerCase() === str2.toLowerCase();
console.log(compare);

}

//Problem 18
{
let userName = "Sarah";
let hour = 9; // 9 AM
// Create a greeting: "Good morning, Sarah!"
// Hint: Use template literals
let greeting = `Good morning, ${userName}!`;
console.log(greeting);
}

//Problem 19
{
let userAge = 16;
let minimumAge = 18;
// Write a comparison to check if user is old enough
let isOldEnough = userAge >= minimumAge;
console.log(isOldEnough);
}

//Problem 20
{
let email = "alice@example.com";
let firstChar = email[0];
let isValid = firstChar >= 'a' && firstChar <= 'z';
console.log(isValid);

}

//Problem 21 
{
let productName = "Wireless Mouse";
let productPrice = 29.99;
let inStock = true;
let description =`Product: ${productName} | Price: ${productPrice} | In Stock: ${inStock}`;
console.log(description);

//Problem 22
{
let firstName = "John";
let middleName = "Robert";
let lastName = "Smith";
let initials = firstName[0] + "." + middleName[0] + "." +lastName[0];
console.log(initials);  
}
}

//Problem 23
// {
// let firstPlace = "Gold";
// let userName = "Alice";
// let totalCost = 100;
// if (age === 18) {
//  console.log("You can vote");
// }
// let message = 'It\'s a beautiful day';

// }

//Problem 24
{
let userInput = "25";
if (userInput === "25") {
 console.log("Input is correct");
} else {
 console.log("Input is incorrect");
}
}
//Problem 25
{
   let password = "Pass123";
let isLongEnough = password.length >= 6;
let startsWithUppercase = password[0] >= 'A' && password[0] <= 'Z';
let lastChar = password[password.length - 1];
let endsWithNumber = lastChar >= '0' && lastChar <= '9';
console.log("Password is long enough:", isLongEnough);
console.log("Starts with uppercase:", startsWithUppercase);
console.log("Ends with number:", endsWithNumber);
}