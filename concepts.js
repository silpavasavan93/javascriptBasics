//hoisting in java script - how to make effective line by line apporach with interpretter
// default mode of execuition - line by line
 
//declaration/ invocation befor implementation is called as hoisting

greet ()
function greet (){
    console.log ("greet")
}



// scop chain 
// 3 scops - global , function , block
// global - accessible everywhere
// function - accessible inside function only
// block - accissible inside a block of code only (if , for )/ local variable for blocks 

let company ="ABC company" // global variable

function empName(){
    let name ="Niranjana" // function scop variable 

    if (name.length>4){
        let valid = true // block of code
        return valid // valid is both block and function variable 
    }
}
// when js find the variable accessible outside its actual scop -> scop chain
// when js can not find a variable in the current scop, it searches for the outer scop, this process is called to be scop chain
// synchronus coding - by default js execute synchronously
// asynchronus coding - waiting for elememts ,
// 3 approaches - 1. call back- older  , 2,promises  3 ,asynch/await

//a function is passed as the parameter of another function

// function greet(name,callback)
// {
//     console.log("hello",name) // hello ,silpa
//     callback(greetings) //message()
// }
// functionmessage (callback){
//     console.log("welcome")
//     callback()
// }
// function greetings()
// {console.log("Hi")

// }
// greet("Silpa",mesage)

