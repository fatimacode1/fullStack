//Problem 1
{
 let name = "Fatima";
 let age = 23;
 let isStudent = true;
 let favColor = "Black";
 let siblings = 7;

 //Problem 2
console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(typeof favColor);
console.log(typeof siblings);
}

//Problem 3
{
let score;
console.log(score);
console.log(typeof score);

let winner = null;
console.log(winner);
console.log(typeof winner);

//undefined means variable is declared but the value is not assigned
//null means the value is explicitly given as empty value
}

//Problem 4
{
    let firstName = "Fatima";
    let lastName = "Ahmed";
    let fullName = "Fatima Ahmed";
    console.log(fullName);
    
}
//OR
{
    let firstName = "Fatima";
    let lastName = "Ahmed";
    let fullName = firstName + " " + lastName;
    console.log(fullName);
    
}

//Problem 5 
{
let a = "5";
let b = 3;
let result = a + b; 
console.log(result); //"53"
console.log(typeof result); //string


}

//Problem 6
{
    let num1 = 45;
    let num2 = 12;
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
    console.log(num1 % num2);
}

//Problem 7 
let celsius = 25;
let farenheit = (celsius * 9/5 ) + 32;
console.log(`25C is equal to ${farenheit}F`);

//Problem 8
let radius = 7;
let circumference = 2 * Math.PI * radius;
console.log(circumference.toFixed(2));
let area = Math.PI * radius**2;
console.log(area.toFixed(2));

//Problem 9 
let notebooks = 45 * 3;
let pens = 15 * 2;
let backpack = 850 * 1;
let subTotal = notebooks + pens + backpack;
console.log(subTotal);

let discount = subTotal * 0.10;
let finalTotal = subTotal - discount;
console.log(finalTotal);

//Problem 10
{
    let num =  17; 
    if (num % 2 === 0) {
        console.log(`${num} is even`);
        
    } else {
        console.log(`${num} is odd`);
        
    }
}

//Problem 11
{
    let result1 = 10 + 5 * 2;
    console.log(result1); //20

    let result2 = (10 + 5) * 2;
    console.log(result2); //30

    let result3 = 20/4 + 3 * 2;
    console.log(result3); //11

    let result4 = 2 ** 3 + 5;
    console.log(result4); //13

    let result5 = (8 + 2) / 5 * 3;
    console.log(result5); //6
}

//Problem 12
{
    let result = (10 + 20) * 5 / 3;
    console.log(result);
    
}

//Problem 13
{
    let result = ((15 + 5) * 3 - 10) / 4;
    console.log(result);
    
}

//Problem 14 
{
    let balance = 5000;
    console.log(balance);
    balance += 15000;
    console.log(balance);
    balance -= 8000;
    console.log(balance);
    balance += 5000;
    console.log(balance);
    balance -= 3000;
    console.log(balance);

    let finalBalance = balance;
    console.log(finalBalance);
    
}

//Problem 15
{
    let amount = 10000;
    amount *= 1.10;
    console.log(amount);
    amount *=1.10;
    console.log(amount);
    amount *=1.10;
    console.log(amount);
    
}

//Problem 16
{
    let x = 10;
    let y = x++;
    console.log("x", x, "y", y); //x, 11 y, 10

    let a = 10;
    let b = ++a;
    console.log("a", a, "b", b); // a 11 b 11    
}

//Problem 17
let countdown = 10; 
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);
console.log(--countdown);

//Problem 18 
{
    let num = 5;
    let newNum = num++;
    console.log(newNum); //5
    newNum = ++num;
    console.log(newNum); //7
}

//Problem 19
{
    let result1 = 0/0;
    console.log(result1); //NaN

    let result2 = "hello" * 5;
    console.log(result2); //NaN

    let result3 = NaN + 10;
    console.log(result3); //NaN
    
    let result4 = Math.sqrt(-1);
    console.log(result4); //NaN

    console.log(typeof NaN); //number
    
}

//Problem 20
{
    let value1 = 100;
    console.log(Number.isNaN(100)); //false
    let value2 = "test" / 2;
    console.log(Number.isNaN(value2)); //true
    let value3 = 0 / 0;
    console.log(Number.isNaN(value3)); //true
    let value4 = "123";
    console.log(Number.isNaN(value4)); //false   
}

//Problem 21
{
    let math = 85;
    let science = 92;
    let english = 78;
    let history = 88;
    let computer = 95;
    let avg = (math + science + english + history + computer) / 5;
    console.log(`Your average grade is ${avg}`);
    
}

//Problem 22
let currentYear = 2026;
let birthYear = 2003;
let age = currentYear - birthYear;
console.log(`In ${currentYear}, you are ${age} years old`);

//Problem 23
let a = 10;
let b = 20;

a = a + b; 
b = a - b;
a = a - b;
console.log(a, b);


//Problem 24
{
    let nums = 456;
let first = Math.floor(nums /100);
let second = Math.floor((nums % 100) / 10);
let third = nums % 10;
let sum = first + second + third;
console.log(sum); //15

}