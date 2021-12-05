//Promises, Async await & template literal- Day 16 class//


//Default Parameter
function hello(name = "world"){
  console.log("hello " + name);
}

hello();
hello("Simi");
//hello(Simi);-> error as datatype string need to be passed

//Template literal

console.log("Apple Banana Grape Oranges Peaches");
console.log("Apple\nBanana\nGrape\nOranges\nPeaches");
var num1 = 123;
var num2 = 123;
var num3 = 123;
console.log(`
  Apple
  Banana
  Grape
  Oranges
  Peaches
  `);

  console.log(`
    Apple
    Banana
    Grape
    Oranges
    Peaches
    ${num1}
    ${num2}
    ${num3}
    `);

//Promises and Async await

console.log(fetch("https://jsonplaceholder.typicode.com/users"));

fetch("https://jsonplaceholder.typicode.com/users").then((result) =>
console.log(result));

fetch("https://jsonplaceholder.typicode.com/users")
.then((result) => result.json())
.then((data) => console.log(data))
.catch((error) => console.log(error));
