//1. Write a function calculateAverage(a, b, c) that returns the average of three numbers. Input: 10, 20, 30 Output: 20 

function average(a,b,c)
{
 var res =(a+b+c)/3
return res;
}

console.log (average (10,20,30));

//2. Write a function largest(a, b, c) to find the largest among three numbers and return the value
function largerst(a,b,c) {
if (a>b && a > c )
 {
 var largest = a;
}
 else if (b>c) 
{
var largest = b 
}
else {
largest = c }
return largest;
}

console.log (largerst (20,30,40)+ " is the largest number")


//3. Write a function countVowels(str) that counts the number of vowels in a string

function countVowels(str)
{
let count = 0
for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
        count++;
    }
}
return count;
}
console.log(countVowels("elephant"));

// use for of 
function countVowel(str) {
 let count=0
   for (elements of str){
      if ("aeiou".includes(elements)) {
         count++;
         continue;
      }
   }
         return count;

}
console.log(countVowel("elephant"))


//4. Create a function calculateInterest() using: Principal = 5000 Rate = 5 Time = 2 Calculate and display the simple interest.


function calculateInterest(a,b,c){
   var interest = (a*b*c)/100
 return interest;
}
console.log(calculateInterest(5000,5,2))



//. 5. Create a function findFactorial() that calculates the factorial of a predefined number.


function findFactorial() {

    let n = 5
    let res = 1

    for (let i = 1; i <= n; i++) {
        res = res * i;
    }

    return res;
}

console.log(findFactorial())