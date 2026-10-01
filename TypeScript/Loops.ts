//basic for loop, we write let  i =0 , but in TS
for (let i : number =0 ;i<5;i++){
console.log(i)
}


// declare an array and traverse through it . 
// string[] mention a string array
// number []
 const fruits : string[]   =["apple","orange","guava"]
 for (const fruit of fruits) {
    console.log(fruit)
 }

 for(const fruit in fruits) {
   // console.log(fruit) - for index values
    console.log(fruits[fruit]) // for elements
 }

 // while and do while loop

 let n : number =9 // initializing 
//  while (n>0){
//     console.log(n)
//     n--;
//  }

// do while loops
 do {
    console.log(n)
    n--;
 }
 while (n>1)