//conditional statements
//if , if else, if elese if laddedr . switch case , ternery operators


/*var a = 10
var b = 2
if (b>a)
    {
    console.log("Number is valid")
    }

    //if else
    if (b>a)
    {
    console.log("Number is valid")
    }

else {
    console.log("Number is invalid")
     }
//if else if ladder 
var age =17
if (age<13){
    console.log("Child")
}
 else if (age<30 && age<19)
 {
        console.log("Teenager")
 }
 else if(age <29)
 {
     console.log("Young") 
    }
else{
     console.log("Senior citizen")

    }*/
   //switch we can check only the equality
/*
   var day = 9
   switch(day){
    case 1:  //day =1
    console.log("Sunday")
    break // forcefully exit 
    case 2: 
    console.log("Monday")
    break
    case 3 :
        console.log("Tuesday")
    break
     case 4:
        console.log("Wednesday")
    break
     case 5:
        console.log("Thursday")
    break
     case 6:
        console.log("Friday")
    break
    case 7: 
    console.log("Saturday")
    break

default:  // similar to else statement
console.log("Invalid day")
   }
*/
   //ternary oeprators - it is short key of if else condition
   //syntax   condition?value if true: value if false;
   // if single statemnet is required , then we can use this ternary operator 
   // if age>18 otherwise minor 
var age =25
   age>=18?console.log("adult"): console.log("minor")

