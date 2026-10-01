   //loops -  if limit is known then we can use for loops
   // condition based, then we can use while loop
// iteration is decided from a condition , but once we need to execute we can use , do while

//  basic for loop, initialization , condition , update 
// iteration performing using basic numeric values
//  for (let i=1;i<=100;i++) {
//     console.log(i)
//  }

//  // need to print odd numbers
//  for (let j=1;j<10;j=j+2){
// console.log(j)
//  }

//  // need to print even numbers
//  for (let k=2;k<10;k=k+2){
//    console.log(k)
//  }

// there are 2 types of for loops, forof - to travers in to an array

// let fruits = ["apple","orange","guava"]

// for (const fruit of fruits) // use const for this method 
//    {
//    console.log(fruit)
// }
// this will pick array values
// for of iterates over the values of collections like array , string etc 

// for in loops, it work as object based
// dictionary - another version of js object, use the same format key value pair
//what should i do keep a dictionary ? we use opbjects for creating dictionary

// let employees =
// { 
//    name : "Silpa",
//    dept : "QA",
// }
// for(const key in employees ) // iterates over object keys
//    {
//       console.log(key,employees[key])

// }



//while loops , we dont know the limit but based on condition, so we can use while loop
// initialization , condition , statement 
//initialization & condition are done before loops starts
// entry controlled loops, coz in entry condition checking is done

// let name ="Silpa"
// let x =0 // initialization 
// while(x<name.length) // condition
// {
// // print the index position value
// console.log(name[x])
// // to avoid infinit loops, proper increment /decrement
// x++
// }

// the steps must executed at least once even if the condition fails. use do while loop
// initialization , statements to be executed, updates, statements and update and condition
// this is exit control loops

//do while

//int the number , if n is less than 10, then print n

let n =15

do{
console.log(n)
n++
}
while(n<10)

// if the string has i in it needs to be skip, rest charecters need to be print 

let S= "Techgenstia Software Technologies private Limited"

// need to convert to lowercase or uppercase
S=S.toLowerCase()
console.log(S)
var S2=""
for (const element of S ){
   //use the loop control statement
   //break , continue  are the keywords, for execution stop we use break, for skipping a specific iteration or step we use continue ie;continue iteration for others &skip for this
    if ( element=='i')
    {
      continue
   }
console.log(element)
var S2=S2+element; // concatinated , this will show the modified strimng in a scentence
}
console.log(S2)