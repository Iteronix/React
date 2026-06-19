// Task 1 – Variables and Template Literals
// Create two variables, firstName and lastName, and combine them into a greeting message using template literals. Log the message.

let firstName="Lionel";
let lastName="Messi";
console.log(`My name is ${firstName} ${lastName}`);

// Task 2 – let and const Scope
// Create a let variable inside a block {} and try to access it outside. Then do the same with a const variable. Observe the errors.

{
    let x=10;
}
console.log(x);

// let is block-scoped, meaning it only exists inside the {} where it was declared.
// When you try to access x outside, JavaScript throws a ReferenceError because x is not visible there.
// 
{
    const y=9;
}
console.log(y);
// const is also block-scoped, just like let.
// The error is the same: ReferenceError because y is not accessible outside the block

//Task 3 – Arrow Function Simple
// Write an arrow function greet that takes a name and returns "Hello, !". Test it with your name.

let greeting=()=>{
    let b="Hello,I am Messi"
    return b;
}
console.log(greeting());

//Task 4 – Arrow Function with Multiple Parameters
// Write an arrow function multiply that takes two numbers and returns their product. Log the result for 5 and 6.

let multiply=(num1,num2)=>{
    return num1*num2;
}
console.log(multiply(5,6));

// Task 5 – Object Destructuring

// Create an object person with keys name, age, and country. Destructure the object to extract name and country into variables and log them.

const person={
    name:"lionel Messi",
    age:37,
    country:"Argentina"
}
const {name,country}= person;
console.log(name);
console.log(country)

//Task 6 – Array Destructuring
// Create an array [10, 20, 30, 40]. Destructure the first two elements into variables and log them.

const array=[10,20,30,40]
const [first,second]=array;
console.log(first);
console.log(second);

// Task 7 – Default Parameters
// Write a function sayHello with a parameter name that defaults to "Guest" if not provided. Log the output when called with and without an argument

function sayHello(name = "Guest") {
    console.log("Hello, " + name + );
}

// Calling with an argument
sayHello("Bibek"); 

// Calling without an argument
sayHello();        

// Task 8 – Rest Operator (Sum of Numbers)
// Write a function sumAll using the rest operator (...numbers) that calculates the sum of any number of inputs. Test with 1, 2, 3, 4.

const sumAll = (...numbers) => {  
    return numbers.reduce((total, n) => total + n, 0); 

};

console.log(sumAll(1, 2, 3,4)); 

//Task 9 – Spread Operator with Arrays
// Create two arrays [1, 2, 3] and [4, 5]. Merge them into a new array using the spread operator and log the result.

let array1=[1,2,3];
let array2=[4,5]
let newArray=[...array1,...array2]
console.log(newArray);



// Task 10 – Merge and Destructure Objects
// Create two objects: {a: 1, b: 2} and {c: 3, d: 4}. Merge them using the spread operator. Then destructure the merged object to extract a and d and log them.

let obj1={
    a: 1,
    b: 2
}
let obj2={
    c: 3, 
    d: 4
}

let newObject={...obj1,...obj2}
let {a,d}=newObject;
console.log(a);
console.log(d);

