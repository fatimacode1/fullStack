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
    //Basic Boolean Usage
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
{
    let word = "JavsScript";

    //First character
    let first = word[0];
    console.log(first); //J
    
    //Last character using length
    let last = word[word.length - 1];
    console.log(last); //t

    //Why lenth - l?
    //Because length is 10, but last index is 9 (0-based indexing)
    console.log(word.length); //10
    console.log(word[9]); //t
    console.log(word[10]); //undefined (out of bounds)
      
}

//Out of Bounds Access
//Accessing an index that doesn't exist returns undefined

{
    let name = "Alice"; //length is 5, valid indices is 0-4

    console.log(name[0]); //A
    console.log(name[4]); //e
    console.log(name[5]); //undefined
    console.log(name[10]); //undefined
     console.log(name[-1]); //undefined (negative indices don't work like Python) 
}

//Practical Examples

//Example 1: Checking First Character
{
    let email = "alice@example.com";

    if (email[0] === '@') {
        console.log("Email cannot start with @");    
    } else {
        console.log("Email format might be valid");
        
    }
}

//Example 2: Getting Initials
{
    let firstName = "Alice";
    let lastName = "Smith";

    let initials = firstName[0] + lastName[0];
        console.log(initials); //AS
        
    //With dots
    let formalInitials = firstName[0] + "." + lastName[0] + ".";
    console.log(formalInitials); //A.S.
    
}

//Character Validation
{
    let passowrd = "Pass1234";

    let firstChar = passowrd[0];
    let lastChar = passowrd[passowrd.length - 1];

    console.log("First character:", firstChar); //P
    console.log("Last character:". lastChar); //4

    if (lastChar >= '0' && lastChar <= '9') {
        console.log("Password ends with a number");
        
    }
    
}

//Important Notes

//1. Strings are Immutable: You cannot change individual characters
{
   let word = "Hello";
   word[0] = "J"; //This does NOT work!
   console.log(word); //Still "Hello"
   
   //To change a string, create a new one
   let newWord = "J" + word.slice(1);
   console.log(newWord); //Jello  
}

//2.Length vs Last Index
{
    let text = "Hello";
    console.log(text.length); //5
    console.log(text[text.length]); //undefined
    console.log(text[text.length - 1]); //o   
}

//3. Space Count Too
{
    let text = "Hello World";
    console.log(text.length); //11 (space counts)
    console.log(text[5]); //"" (space character)  
}

//String Concatenation 
//Means joining strings together

{
    //Joining two strings

    let firstName = "Alice";
    let lastName = "Smith";
    let fullName = firstName + lastName;
    console.log(fullName); //AliceSmith

    //Adding space
    let fullNameWithSpace = firstName + " " + lastName;
    console.log(fullNameWithSpace); //Alice Smith

    //Multiple Concatenation 
    let greeting = "Hello";
    let name = "World";
    let punctuation = "!";

    let message = greeting + ", " + name + punctuation;
    console.log(message); //Hello, World!

}

//Concatenating Numbers and Strings
//When you use + with a string and a number, JS converts the number to a string
{
    //Number + String = String
    let score = 100;
    let message1 = "Your score is: " + score;
    console.log(message1); //Your score is: 100
    console.log(typeof message1); //string

    //String + Number = String
    let message2 = "Player " + 1;
    console.log(message2); //Player 1

    //Multiple numbers and strings
    let age = 25;
    let message3 = "I am " + age + " years old";
    console.log(message3); //I am 25 years old
}

//Concatenation Examples

//Example 1: Building Messages
{
    let userName = "Bob";
    let points = 150;

    let welcomeMsg = "Welcome back, " + userName + "!";
    let scoreMsg = "You have " + points + " points";

    console.log(welcomeMsg); // Welcome back, Bob!
    console.log(scoreMsg); // You have 150 points   
}

//Example 2: Creating URLs
{
    let domain = "example.com";
    let protocol = "https://"; 
    let page = "/about";

    let fullURL = protocol + domain + page;
    console.log(fullURL); //https://example.com/about
}

//Example 3: Building File Names
{
    let fileName = "report";
    let fileType = ".pdf";
    let year = 2026;

    let fullFileName = fileName + "_" + year + fileType;
    console.log(fullFileName); //report_2026.pdf
}

//The += Operator for Concatenation
{
    let message = "Hello";
    message += " ";
    message += "World";
    message += "!";
    
    console.log(message);
    
}

//IMP: Number Addition vs String Concatenation

//All numbers - addition
console.log(10 + 20); //30 (number addition)

//String first - concatenation
console.log("10" + 20); //1020 (string concatenation)

//Number first, then string - concatenation
console.log(10 + "20"); //1020 (string concatenation)

//Mixed operation 
console.log(10 + 20 + "30"); //3030
console.log("10" + 20 + 30); //102030 (all concatenation)

//Using parentheses
console.log("Result: " + (10 + 20)); //Result: 30 (foces addition first)

//Rule: If any operand in a + operation is a string, JavaScript performs concatenation (converts everything to strings)

//Concatenation vs Template Literals
{
    //Concatenation

    let name = "Alice";
    let age = 25;
    let city = "New York";
    let message = "My name is " + name + ", I am " + age + "years old, and I live in " + city + ".";
    console.log(message);
    


//Template Literal
let betterMessage = `My name is ${name}, I am ${age} years old, and I live in ${city}.`;
console.log(betterMessage);

}

//Null vs Undefined

//1. Variable declared but not initialized
{
    let score;
    console.log(score); //undefined
    console.log(typeof score); //undefined
    
}

//2. Function with no return value
{
    function greet() {
        console.log("Hello!");
        //No return statement
    }

    let result = greet();
    console.log(result); //undefined
    
}

//3. Accessing non-existent object property
{
    let user = {name: "Alice"};
    console.log(user.age); //undefined (property doesn't exist)
    
}

//4. Array element that doesn't exist

{
    let colors = ["Red", "Blue"];
    console.log(colors[5]); //undefined
    
}

//5. Function parameter not provided

{
    function greet(name) {
        console.log(name);
        
    }
    greet(); //undefined (no argument passed)
}

//Example Usage 
{
    let userInput; //declared but not assigned

    if (userInput === undefined) {
        console.log("Please provide input");
        
    } else {
        console.log("Input received:", userInput);
        
    }
}

//Null
//Intentional absence of a value

//1. Intentionally setting something as empty
{
    let currentUser = null //No used logged in
    console.log(currentUser); //null
    console.log(typeof currentUser); //object  
}

//2. Resetting a value
{
    let winner = "Alice";
    console.log(winner); //Alice

    //Game resets
    winner = null;
    console.log(winner); //null (intentionally cleared)
    
    
}

//3. API responses
{
    let userData = {
        name: "Bob",
        email: "bob@example.com",
        phone: null //User hasn't provided phone number
    };
}

//Null or Undefined
//Example 1: User Login State

{
    let loggedInUser = null;
    
    function login(username) {
        loggedInUser = username;
    }

    function logout() {
        loggedInUser = null;
    }

    login("Alice");
    console.log(loggedInUser); //Alice

    logout();
    console.log(loggedInUser); //null
    
    
}

//Example 2: Optional Form Fields
{
    let formData = {
        firstName: "John",
        lastName: "Doe",  
        middleName: null,
        nickname: undefined
      }
}

//Example 3: Database Records
{
    let product ={
        id: 101,
        name: "Laptop",
        discount: null,
        rating: undefined
    };
}

//Other Console Methods
//[WEIC]

//Warning message 
console.warn("This is a warning!");

//Error message 
console.error("This is an error!");

//Info message
console.info("This is information");

//Clear the console
// console.clear();

//Template Literals

//Conditional Logic

{
    let temperature = 30;
    let weather = `It's ${temperature > 25 ? "hot" : "cold"} today!`;
    console.log(weather);
    
}