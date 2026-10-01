var a =1
var b = 6
 console.log(a+b) // a,b operands, + is operator
 console.log(a-b)
 console.log(a*b)
 console.log(a/b)
 console.log(a%b)
 // comparison operators

 console.log(a<b) // returns a boolean value
 console.log(a>b)
 console.log(a<=b)
 console.log(a>=b)

 var c ="50"

 console.log(a==b)// comparing the values
 console.log(a===b)//comparing value& data types
 console.log(a!=b)
 console.log(a!==c)// not same , not same data type

 // Logical Operators , used to compare more than 1 operations or conditions 
 console.log(a>b && a==c) // returns true when both conditions are true
 console.log (a>b || a>c) // returns true either one of them is ture

// ! used when we need to reverse the result
console.log(!(a==c))

//assignment operators , =equals is the basic operator

 //a=a+1 can be write as a+=1
 //a =a-2 can be write as a-=2
 //a= a*5  can be wiite as a*=5

 // increment operators
 //a++ means a+1
 // a--,means  a-1
 //pre operatoion inc.operators are eg : ++a , a++ or a -- post incremement operators
 // use and decrease a++
 // increase and use ++a

let d = ++a
console.log(d,a) // increased both d and a 

let e =a++
console.log(e,a) // assigned the value of a to e, then increased the value of a only
let f = --a 
console.log(f,a)
let g =a--
console.log(g,a)
