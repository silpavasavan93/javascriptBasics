var  age : number  = 10 // we need to specify  the data type, for the type safety

// also we can assign like var age =10

console.log(age) 

// to execute type script, along with node  ,we use type script module in npm  
// tsc filename -to  compile a file

 // age =true  we cant assign like this, bcz we already said age is number
 if (age>18){
    console.log("You are Eligible")
 }

 else {console.log("You are not eligible")}

// loop execuition same like js only
//

// between 21 &60 adult, otherwise senior

 if (age < 18){
    console.log("child")
 }
 else if (age >18 && age <20){
    console.log("teenager")

 }
else if (age >=20 && age < 60){
    console.log("adult")
}
else {
    console.log("senior ")
}