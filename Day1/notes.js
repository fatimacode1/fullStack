//NOTES 1

let nums = 1 + 2;
console.log(nums); //Output: 3

let nums1 = 5 * 10;
console.log(nums1); //Output: 50

let message = "Hello" + " World";
console.log(message); //Output: Hello World

//Creating a variable and assigning a value
let age = 23;
let name = "Tony Stark";
let isStudent = true;

//You can also declare without assigning (value will be undefined)
let score;
console.log(score); //Output: undefined

//Later assign a value
score = 95;
console.log(score); //Output: 95

//Data Types

//1. Number
let age1 = 23;
let price = 99.99;
let temperature = -15;
let distance = 1.56e6;

//2. String
let fullName = "Tony Stark";
let greeting = 'Hello World';
let message1 = `Welcome ${fullName}`;
console.log(message1);

let age2 = 23;
let info = `I am ${age2} years old`;
console.log(info);

//3. Boolean 
let isStudent1 = true;
let iSloggedIn = false;
let hasPermission = true;

//Often used in conditions
if (isStudent1) {
    console.log("Student discount applied!");
    
}

//4. Undefined 
let score1; //Output: undefined
console.log(typeof score1); ////Output: undefined

//5. Null
let data = null; //Explicitly saying "this has no value right now"

//Common use case
let user = null; //No user logged in yet

//Later when user logs in
user = {name: "Alice", id: 101};
console.log(user); //Output: { name: 'Alice', id: 101 }

//6. BigInt
let bigNum = 493209293912n;
let huge = 19299229292992n;

//7. Symbol
let id1 = Symbol("id");
let id2 = Symbol("id2");
console.log(id1 === id2); //Output: false - each symbol is unique 

//Checking Data Types 
console.log(typeof 25); //Output: number
console.log(typeof "hello"); //Output: string
console.log(typeof true); //Output: boolean
console.log(typeof undefined); //Output: undefined
console.log(typeof null); //Output: object (this is a js quirk!)
console.log(typeof 1234n); //Output: bigint


//Basic Operators

//1. Addition 
let sum = 5 + 3; //Output: 8
let result = 10 + 20 + 5; //Output: 35

//2. Subtraction 
let diff = 10 - 3; //Output: 7
let result1 = 50 - 25; //Output: 25

//3. Multiplication 
let product = 4 * 5; //Output: 20
let area = 10 * 20; //Output: 200

//4. Division 
let quotient = 20/4 //Output: 5
let half = 10/2; //Output: 5
let decimal = 7/2; //Output: 3.5
console.log(decimal);


//5. Modulo 
let remainder = 12 % 5; //Output: 2
console.log(remainder);
let check = 10 % 3; //Output:1
console.log(check);
let even = 8 % 2; //Output: 0
console.log(even);

//Practical use: Check if a number is even or odd
let number = 7;
if (number % 2 === 0) {
    console.log("Even"); 
} else {
    console.log("Odd"); //This will execute
    
}

//6. Exponentiation 
let squared = 5 ** 2; //Output: 25
console.log(squared);
let cubed = 2 ** 3; //Output: 8
console.log(cubed);
let power = 10 ** 3; //Output: 1000
console.log(power);

//Combining Operations
let result2 = 5 + 3 * 2; //Output: 11 (operator precedence) [PEMDMAS]
let complex = (5 + 3) * 2; ////Output: 16
//Parentheses force addition first

//String Concatenation 
let firstName = "Tony";
let lastName = "Stark";
let fullName1 = firstName + " " + lastName //Output: Tony Stark
console.log(fullName1);

let age4 = 23;
let message2 = "I am " + age4 + " years old"; //Output: I am 23 years old
console.log(message2);

//NaN 
let result3 = 0/0; //Output: NaN
console.log(result3);

//Invalid mathematical operations
let result4 = Math.sqrt(-1); //NaN (square root of negative)

//Converting non-numeric strings to numbers
let result5 = Number("abcd") //Output: NaN
let result6 = parseInt("Hello"); //Output: NaN

//Operations with undefined
let x;
let result7 = x * 5; //Output: NaN

//Important Characteristics
//1. NaN Propagates
let y = NaN;
console.log(y + 1); //Output: NaN
console.log(y * 5); //Output: NaN
console.log(y / 2); //Output: NaN
console.log(x - 10); //Output: NaN

//2. Type of NaN is "number"
console.log(typeof NaN); //Output: number

//3. NaN Is Not Equal to Itself
console.log(NaN === NaN); //Output: false
console.log(NaN == NaN); //Output: false

//To check if a value if NaN, use:
console.log(isNaN(NaN)); //Output: true
console.log(Number.isNaN(NaN)); //Output: true (more reliable)

//Checking for NaN
let value = 0 / 0;

//Method 1: isNaN() - converts value to number first
console.log(isNaN(value)); //Output: true

//Method 2: Number.isNaN() - doesn't convert (recommended)
console.log(Number.isNaN(value)); //Output: true

//Why Number.isNaN better:
console.log(isNaN("hello")); //Output: true (converts "hello" to number first)
console.log(Number.isNaN("hello")); //Output: false (doesn't convert)

//Operator Precedence
//BODMAS/PEMDAS

//Example 1: Multiplication before addition
let result8 = 5 + 3 * 2;
console.log(result8); //Output: 11

//Example 2: Using parentheses to change order
let result9 = (5 + 3)* 2;
console.log(result9); ////Output: 16

//Example 3: Complex expression
let result10 = (5 + 2) / 7 + 1 * 2;
console.log(result10); //Output: 3

//Example 4: Exponentiation has high precedence
let res = 2 + 3 ** 2;
console.log(res); //Output: 11

//Example 5: Same precedence, left to right
let res1 = 10 / 2 * 3;
console.log(res1); //Output: 15

//Pro Tip
//Less clear
// let total = price + price * taxRate;

// //More clear
// let total1 = price + (price * taxRate);

//Assignment Operators

//Addition 
let age5 = 20;
age5 += 5; 
console.log(age5); //Output: 25

//Equivalent to:
let score6 = 100;
score6 = score6 + 50; //Output: 150
console.log(score6);
//vs. 
score6 += 50; ////Output: 150 (ahorter!)

//Subtraction 
let balance = 1000;
balance -=200; 
console.log(balance); //Output: 800

//Multiplication 
let price1 = 50;
price1 *= 2; 
console.log(price1); //Output: 100

//Division 
let total2 = 100;
total2 /= 4; 
console.log(total2); //Output: 25


//Modulo 
let num2 = 17;
num2 %= 5; 
console.log(num2); //Output: 2

//Exponentiation
let base = 2;
base **= 3;
console.log(base); //Output: 8

{
//Accumulating a total
let total = 0;
total += 100;
total += 250;
total += 75;
console.log(total); //Output: 425
}

//Doubling a value multiple times
{
    let value = 5;
    value *= 2;
    value *= 2;
    value *= 2;
    console.log(value); //Output: 40
    
}

//Unary Operator

//Post-increment (variable++)
{
    let count = 5;
    let result = count++;

    console.log(result); //Output: 5
    console.log(count); //Output: 6
    
}

//Pre-increment (++variable)
{
    let count = 5;
    let result = ++count;

    console.log(result); //Output: 6
    console.log(count); //Output: 6
    
    
}

//Comparison Example
{
    let x = 10;
let a = x++; 
console.log(a); //Output: 10
console.log(x); //Output: 11

let y = 10;
let b = ++y;

console.log(b); //Output: 11
console.log(y); //Output: 11
}

//Decrement Operator

//Post-decrement 
{
    let score = 10;
    let result = score--;

    console.log(result); //Output: 10
    console.log(score); //Output: 9
}

//Pre-decrement (--variable)
{
    let score = 10;
    let result = --score;

    console.log(result); //Output: 9
    console.log(score); //Output: 9
    
    
}

//The Tricky Case
{
    let num = 5;
    let newNum = num++;
    newNum = ++num;

    console.log(num); //Output: 7
    console.log(newNum); //Output: 7
    
    
}

//Common Use Cases

//1. Loop Counters
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
    
}

//2. Counting Down
let countdown = 10;
while (countdown > 0) {
    console.log(countdown);
    countdown--;
    
}
console.log("Blast off!");

//3. Simple Incrementing 
let pageViews = 100;
pageViews++; //Now 101
