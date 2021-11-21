var a =0;
if(a>0 || a===0)
{
  console.log("Number is not negative");
}
else {
  console.log("Number is negative");
}

var b = 0;
if(b>0 && b===0)
{
  console.log("Number is not negative");
}
else {
  console.log("Number is negative");
}

/*Loops -> Do while, while, for*/
//initialisation, condition checking, incretment/decrement/change
var a= 1;
a =a+1;
console.log(a);
a = a-1;
console.log(a);
a++;
console.log(a);
a--;
console.log(a);
a+=1;
console.log(a);
a-=1;
console.log(a);

//for loop//
for (var i=1; i<=30; i++)
{
  console.log(i);
}

//while LOOPS
i=1;
while (i<=20){
  console.log(i);
  i++;
}
 //do while LOOPS
var a = -1; c=0;
 do {
   console.log("Number is positive")
   a++;
   c++;
   if (c===10)
   {
     break;
   }
 } while (a>=0);

// FUNCTIONS
var a1=1, b1=1;
function add1(a1,b1)
{
  console.log(a1 + b1);
}
add1(4,3);
add1(9,10);


function add(a,b)
{
  return(a+b);
}
var x = add(2,3);
var y = add(9,10);
console.log(x);
console.log(y);

function add2(a,b){
  return a+b;
}
console.log(add2(6,10));

var a=1;
function fun(){
  a++;
}
for (var i=0;i<20;i++){

  fun();
  if (i%2!=0)//i is odd
  console.log(a);
}
