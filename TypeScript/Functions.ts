function Type ()
{ 
console.log("Welcome to TS")
}
// void - no return type  , so we give void after function name

function function2() : void {
console.log("This is a non return function")
}

Type()

function2()

// add 2 num, we need to specify the data type , and should probvide return data type too
// here adding 2 numbers and returning a number
 function  addition(a: number,b:number) : number {
 
   return  a+b
 }
     console.log(addition(5,10))
