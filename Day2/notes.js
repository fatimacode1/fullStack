//Notes 2

//Identifier Rules

//1. Characters Allowed
//letters, digits, underscore, dollar signs are allowed
//Valid examples
{
let userName123;
let _privateVariable;
let $specialValue;
let total_AMOUNT;
}

//2. No Spaces

//Invalid
//let user name;
// let total cost;

//Valid alternatives
{
    let userName;
    let user_name;
    let totalCost;
}

//3. Starting Character
//Must begin with letter, underscore, dollar sign
//Identifiers cannot begin with a digit (0-9)

//Valid
{
    let age;
    let _private;
    let $price;
}

//Invalid

//let 1234name;
//let 9lives;

//4. Case Sensitivity
//It treats uppercase and lowercase letters as completely different
{
let useAge = 25;
let userage = 30;
let UserAge = 35;
let USERAGE = 40;

//These are four different variables!
console.log(useAge); //25
console.log(userage); //30
console.log(UserAge); //35
console.log(USERAGE); //40
}

//5. Reserved Words
//Cannot use JS keywords or reserved words as identifiers

//Invalid - using reserved words
//let let = 10;
//let if = 20;
//let function = 30;

//Valid alternatives
{
    let lerVariable = 10;
    let ifCondition = 20;
    let functionName = 30;
}

//Valid Identifiers
/* price1234
total_cost 
$amount
_private
userName
MAX_VALUE
item1
$_
*/

//Invalid Identifiers
/*
123price
old price
total_cost
let
user@name
total#
price%
my-var
*/

//Common Mistakes to Avoid
//1. Hyphens vs Underscores

//Invalid
//let user-name = "Alice";

//Valid
{
    let use_name = "Alice";
    let userName = "Alice";
}

//2. Starting with Numbers
//Invalid
//let 1stPlace = "Gold";
//let 99ballons = 99;

//Valid 
{
    let firstPlace = "Gold";
    let place1st = "Gold";
    let ballons99 = 99;

}

//Special Characters

//Invalid
//let my#variable = 10;

//Valid (only _ and $ are allowed as special characters)
{
    let my_variable = 10;
    let my$variable = 10;
}

//Naming Conventions 

//1. camelCase
{
    let userName = "Alice";
    let totalPrice = 99.99;
    let isLoggedin = true;
    let calculateTotalCost = function() {};
    let getUserInfo = function() {};
}

//Examples from real code:
{  
//Variables
    let firstName = "Jhohn";
    let lastName = "Doe";
    let dateOfBirth = "2003-01-10";
    let emailAddress = "john@example.com";

//Functions 
function calculateAge(birthYear) {
    return 2026 - birthYear;
}

function sendEmailNotification(email, message) {
    //code here
}
}

//2. snake_case
{
    let user_name = "Alice";
    let total_price = 99.99;
    let is_logged_in = true;
    let calculate_total = function() {};
}

//PascalCase 
{
//Classes and Constructors
class UserAccount {
    constructor(name) {
        this.name = name;
    }
}

class ShoppingCart {
    //class code
}

//React Components
// function UserProfile() {
//     return <div>Profile</div>;
// }
}

//4.SCREAMING_SNAKE_CASE
{
    const MAX_LOGIN_ATTEMPTS = 3;
    const API_KEY = "abc123xyz";
    const PI = 3.14159;
    const DATABASE_URL = "mongodb://localhost:27017";
}

//5. Hungarian Notation (Rarely Used)
{
    let strName = "Alice"; //str = string
    let numAge = 23; // num = number
    let bIsActive = true; // b = boolean

}

//Booleans and Dynamic Typing 
{
    //Basic Boolean Usega
    let isLoggedin = true;
    let isOver18 = false;
    let hasPermission = true;
    let isEmailVerified = false;

}

//Boolean in Conditions
//Booleans are typically used in conditional statements
{
    let isStudent = true;
    
    if (isStudent) {
        console.log("Student discount applied!");
        
    } else {
        console.log("Regular price");
        
    }

}

//Boolean Expressions
//You can create boolean values through comparisons
{
    let age = 23;
    let isAdult = age > 18; //true
    console.log(isAdult);
     
    let score = 75;
    let isPassing = score >= 60; //true
    let isFailing = score < 60; //false
    
    let temperature = 30;
    let isHot = temperature > 25; //true 
    let isCold = temperature < 10; //false
    
}

//Common Boolean Use Cases

{
    //Toggle states
    let isMenuOpen = false;
    let isDarkMode = true;
    let isPlaying = false;

    //User states
    let isLoggedin = true;
    let isAdmin = false;
    let isVerified = true;

    //Feature flags
    let isFeatureEnabled = true;
    let isBetaUser = false;

    //Validation 
    let isEmailValid = true;
    let isPasswordStrong = false;
    let isFormComplete = true;
}

//Truthy and Falsy Values 

//Falsy values (evaluate to false)
/* 
1. false
2. 0
3. "" (empty string)
4. null
5. undefined
6. NaN
*/

//Everything else is truthy
/* 
1. true
2. 1 (or any non-zero number)
3. "hello" (any non-empty string)
4. [] (arrays)
5. {} (objects)
*/

//Example 
{
    if (0) {
        console.log("This won't run"); //0 is falsy
     
    }

    if (1) {
        console.log("This will run"); //1 is truthy
        
    }

    if ("hello") {
        console.log("This will run"); //non-empty string is truthy
        
    }
}

//Dynamic Typing: JavaScript vs TypeScript 

//JS Dynamically Typed
{
    let x = 5; //x is a number
    console.log(typeof x); //number
    
    x = "hello"; //Now x is a string - ALLOWED!
    console.log(typeof x); //string

    x = true; //Now x is a boolean - ALLOWED!
    console.log(typeof x); //boolean

    x = [1,2,3,4]; //Now x is an array - ALLOWED!
    console.log(typeof x); //object
}

//Example of a potential problem 
{
    function addNumbers(a, b) {
        return a + b;

    }
    console.log(addNumbers(5, 10)); //15
    console.log(addNumbers("5", 10)); //510 (Unexpected string concatenation!)
    console.log(addNumbers(5, "10")); //510
      
}

//TypeScript: Statistically Typed
/* 
let x: number = 5; //x must be a number
console.log(x); //5
x = "hello";  //ERROR: Type 'string' is not assignable to type 'number'
x = true; // ERROR: Type 'boolean' is not assignable to type 'number'

//This will only accept numbers
x = 10; //This works

*/

//TypeScript example with function
/*
function addNumbers(a: number, b: number): number {
return a + b;
}

console.log(addNumbers(5, 10)); //15
console.log(addNumbers("5", 10)); //ERROR at compile time!
console.log(addNumbers(5, "10")); //ERROR at compile time!
*/

//JS - Flexible but potentially problematic
let userAge = 25;
userAge = "twenty-five"; //Allowed but probably not intended
userAge = null; //Allowed but might break calculations

function calculateDiscount(age) {
    return age * 0.1; //What if age is a string?
}

//Strings
//''
let firstName = 'Alice';

//""
let firstname = "Alice";

//``

let first_name = `Alice`;

//Option 1: Use Different Quote Types
{
    let message1 = "It's a beautiful day"; 
    console.log(message1);

    let message2 = "He said, 'Hello there!'";
    console.log(message2);

    //Use single quotes on outside, double quotes inside

    let message3 = 'She said, "Good morning!"';
    console.log(message3);

    let message4 = 'The word "hello" is friendly';
console.log(message4);   
}

//Option 2: Escape Characters with Backslash

//Escape single quote inside single quotes
{
    let message1 = 'It\'s a beautiful day';
    console.log(message1);
    

    //Escape double quote inside double quotes
    let message2 = "He said, \"Hello there!\"";
    console.log(message2);
}

//Option 3: Use Template Literals (Backticks)
//No escaping needed!
{
    let message1 = `It's a beautiful day`;
    console.log(message1);
    let message2 = `She said, "Good morning!"`;
    console.log(message2);
    let message3 = `Use 'any' "quotes" you want!`;
    console.log(message3);
  
}

//Common Mistakes with Quotes 

//Wrong: Same quotes without escaping

//let message = 'It's a day';
//JS thinks the string ends at the second quote
//It sees: 'It' followed by confusing text: s a day';

//Right: Solutions 
{
    let message1 = "It's a day";
    console.log(message1);
    let message2 = 'It\'s a day';
    console.log(message2);
    let message3 = `It's a day`;
    console.log(message3); 
}

//String Properties and Methods

//Length Property
{
    let name = "Alice";
    console.log(name.length); //5
    
    let message = "Hello, World!";
    console.log(message.length); //13

    let empty = "";
    console.log(empty.length); //0   
}

//Common String Methods (Preview)
{
    let text = "Hello, World!";
    console.log(text);
    

    //Convert to uppercase
    console.log(text.toUpperCase());

    //Convert to lowercase
    console.log(text.toLowerCase());

    //Extract part of string
    console.log(text.slice(0, 5)); 
    
    //Replace text
    console.log(text.replace("World", "JavaScript"));
    
}

//Escape Sequences 
//Special characters that start with a backslash (\);

{
    let newLine = "First line\nSecond line";
    console.log(newLine);

    let tab = "Name:\tAlice";
    console.log(tab);

    let backslash = "This is a backslash: \\";
    console.log(backslash);

    let quote = "She said, \"Hi!\"";
    console.log(quote); 
    
}

//Common escape sequences:
/* /
|n - New line
|t - Tab 
\\ - Backslash
\' - Single quote
\" - Double quote
\r - Carriage return
*/
{
    console.log("Hello\rWorld"); //World
    console.log("12345678\rABCD"); //ABCD5678   
}

//String Indexing 
//0-based indexing

//Accessing Characters
{
let city = "Hyderabad";

console.log(city[0]);
console.log(city[1]);
console.log(city[2]);
console.log(city[3]);
console.log(city[4]);
console.log(city[5]);
console.log(city[6]);
console.log(city[7]);
console.log(city[8]);
console.log(city[9]); //undefined
}

//First and Last Characters