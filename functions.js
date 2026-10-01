//functions -  reusable block of codes to perform a specific task 
//function definition/ decleration  - what need to be perform, we can perform decleration  and definition to gether
//function call or invocation - when to perform 
//type of functions - non parameterised, parameterised, non parameterised with return type, parametersied with no return type
// additionally arrow function(shortcut of writing functions)
// function definition syntx: function function name(formal parameters if any){  statements }
//function call syntax function name(Actual parameters if any)
//eg addition() reuable with values , parameters needed as it is reusable
//greet () no parameters needed as dynamic data is present
// to print welcome to the firm, whenever needed

/*function welcomeText() //  this is a non parameterised functions
{
console.log("Welocme to the firm")

}
welcomeText()

//  non parameterised functions

function addition(a,b) // formal parameters- it is passing in the function , this params are generic
{
   var  res =a+b
   console.log(res)
}

addition(1,2) // 1,2 are actual parameters
addition(5,6) // 5,6 are actual parameters-
*/
// return - to use the +func tion result to another function or somewhere else.


//create a function that returns the value to be true if marks>200; otherwise return false; 
// static - non parameterised

function markEvaluation()
{
   var marks = 300
   return (marks>200)?  true :  false; 

}
 
console.log(markEvaluation())



//multiply 2 nums and retun the product 

function multiply(x,y){
   var res = x*y
   return res;
}

console.log( multiply(10,20));
 
// if the marks evln returns true & product of given numbers are greater than 20 , then print valid.\
function evaluate(){
   var markResult = markEvaluation()   // saved the result to a variable
   var multiplyResult = multiply(10,90)

   if (markResult==true && multiplyResult > 20)
   { console.log("valid")

   }
   else {
      console.log("invalid")
   }
}
evaluate()



// Arrow function - Shortkey of functions, 

// without params

 const result = () => {        // result is the function name , also known as anonym function.
console.log("This is a shortcut function")

 }
 result()      // function call

 // pass a num as params , return the square rute of rum

// either 

const square=(x)=>x*x; 


console.log(square(4)) 