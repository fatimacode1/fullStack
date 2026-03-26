// DAY 1 - Basics (Variables, Data Types, Operators) [7]

//[1]. REPL Pattern - Read, Evaluate, Print, Loop
let add = 1 + 2;
console.log(add);

//[2]. Data Types 

/* 1. Number 
2. String 
3. Boolean 
4. Undefined 
5. Null 
6. BigInt & Symbol */

//1. Number 
//Integers and Decimals
let num =  1;
console.log(num);

//2. String 
//Text enclosed in quotes
let name = "Fatima";
console.log(name);

//3. Boolean
//Logical true or false
let isStudent = true;

//4. Undefined 
//Variable declared but not assigned 
let x; 
console.log(x); //Output: undefined 

//5. Null 
//Intentional Absence of value 
let data = null; 
console.log(data);

//6. BigInt & Symbol
//Large integers and unique IDs
 let bigInt = 10202n;
 console.log(bigInt);

 let id = Symbol("id");
 console.log(id);
 
//[3]. Arithmetic Operations

/* 1. Addition
2. Subtracion
3. Multiplication
4. Division
5. Modulo
6. Exponentiation */

//1. Addition 
let add1 = 2 + 2;
console.log(add1);

//2. Subtraction
let sub = 5 - 1;
console.log(sub);

//3. Multiplication
let mul = 2 * 2;

//4. Division
let div = 2 / 5;
console.log(div);

//5. Modulo 
let mod = 2 % 2;
console.log(mod);

//6. Exponentiation 
let expo = 2 ** 2;
console.log(expo);


// [4]. NaN - Not a Number 

//1. 
let adding = NaN + 1; 
console.log(adding); //Output: NaN

//2.
let multiplying = NaN * 1;
console.log(multiplying); //Output: NaN

//3.
let dividing = 0 / 0;
console.log(dividing); //Output: NaN

//4.
console.log(typeof(NaN)); //Output: number

//[5]. Operator Precedence

//Order (Highest to Lowest)
//BODMAS
/* [PEMDMAS]
1. Parentheses ()
2. Exponentiation **
3. Multiply, Divide, Modulo *, /, %
4. Add, Subtract +, -
*/

let example = (5 + 2) / 7 + 1 * 2;
console.log(example); //Output: 3 

//[6]. Assignment & Unary Operators

//1. Assignment Operators
let age = 1; 
age += 1; //let age = age + 1
console.log(age);

//2. Unary Operators
//++age1
//Changes first, then uses
let age1 = 17;
console.log(++age1);
console.log(age1);

//age++
//Uses first, then changes
let age2 = 18;
console.log(age2++);
console.log(age2);

//[7]. Practice Problmes

//Problem 1
let age3 = 23;
age3 + 2; //age += 2
console.log(age3); //Output: 23

//Problem 2
let hindi = 80;
let eng = 90;
let math = 100;
let avg = (hindi + eng + math) / 3; //Output: 90

//Problem 3
let num1 = 5;
let newNum = num1++; // newNum = 5, num1 = 6
console.log(newNum); //Output: 5

newNum = ++num1; // num = 7, newNum = 7
console.log(newNum); //Output: 7







