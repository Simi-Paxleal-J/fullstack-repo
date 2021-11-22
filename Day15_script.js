
//Hoisting
var items = {
  food: 1000,
  drinks: 2000
};
var cart = 0;//initialization

function addCartValue(item)
{
  return cart + item;
}
/* //Call back function
const addCartValue = (item) =>
{
  return cart + item;
};
*/

function addToCart(item)
{
  cart = addCartValue(item);
}
/* //Call back function
const addToCart = (item) =>
{
  cart = addCartValue(item);
};
*/

addToCart(items.food);
console.log("Cart value: ",cart);
var cart;//declaration

//let c;//to bring initialization,declaration to top of the browser dont use in hoisting
//const b;//not in hoisting

//This keyword - current executing OBJECTS
const OurObject =
{
  name: "This Keyword",
  getThis: function()
  {
    console.log(this);
  }
};
OurObject.getThis();

console.log(this);//BrowserWindow is parent when no active object like above OurObject

//ARRAYS
let myArray = [1,2,3,4,5,6];
console.log(myArray);

myArray.push(7);//insert item to the array
console.log(myArray);

myArray.pop();
console.log(myArray);

myArray.unshift(0);
console.log(myArray);

myArray.shift();
console.log(myArray);
