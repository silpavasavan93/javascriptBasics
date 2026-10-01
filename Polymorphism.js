//to calculate area of a shape calculateArea(), if 1 value it is circle, 2 params - rectangle, 3 params , triangle
// sbi - 3%, hdfc 5%

class numbers{


    // add (a,b){
    //     return a+b
    // }

    add (a,b,c){
        if (arguments.length===2){
            return arguments[0]+arguments[1]
        }
        if (arguments.length===3){
            return arguments[0]+arguments[1]+arguments[2]
        }
    }
//default function or defualt valued functions

    addition(a,b=0,c=0){
        return a+b+c
    }
}

let num = new numbers()

console.log(num.add (5,6)) // this is returning NaN coz , 2+3+undefined is passing, so we modified the functions
console.log(num.add (5,6,7))

console.log(num.addition(2,2,4))
console.log(num.addition(1,2))
console.log(num.addition(1))

// doing more than one functions using same function


