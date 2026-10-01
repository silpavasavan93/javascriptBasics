// class classname{
// constructor (special functions that help in the creation of objects)
// data
// behavior/functions

// }
// store details of employye  job leavel & basic salary
// create 2 functions to display details 
//based on the jobb level  jl1 jl2 jl3, increament a specific amount with salary

// notes- store some data in a requirement this means use constructors with params
//client location - shouldnt accessable  out of the class- a mofidfier private use for this
// # symbol is used for privatization 

class employee { // created a class
    #client_location ="India" // this is a private variable 
     constructor (empId,empName,jobLevel,bSalary) {
// this is the keyword  construsctor used to craete a new constructor

this.empId=empId // right side empid is value passed via params, this.empId is obj1 il ulla empid aanu    
this.empName=empName
this.jobLevel=jobLevel
this.bSalary=bSalary
}

displayDetails(){ // created a behaviour  
    console.log(this.empId)
    console.log(this.empName)
    console.log(this.jobLevel)
    console.log(this.bSalary)
    console.log(this.getLocation())

}

updateSalary(){ // functioncreated
    
    if(this.jobLevel == 1){
        this.bSalary +=1000

    }
    else if (this.jobLevel == 2) {
        this.bSalary +=2000
    }
    else if (this.jobLevel == 3) {
        this.bSalary += 3000
    }
    else{ 
        this.bSalary=this.bSalary }
    
   }
getLocation()
{
    return this.#client_location // private methods/ variables supposed to be handled thorugh functions only
}

}
// javascript execute line by line;

let employee1 = new employee(101,"Silpa",2,25000)// object creation out of the class block.


employee1.displayDetails();
employee1.updateSalary(); // salary got updated
employee1.displayDetails();

// Encapsulation - showed the necessary data only . (hiding sensitive data)

// abstraction - showing essential data to  the end users( hiding process/ implementation/ function)
// we use access  modifiers for this process too , (it allowes when , where and how .)


class Student {
     constructor (StudentId,StudentName,semester,s1mark,s2mark,s3mark) {
        this.StudentId=StudentId
        this.StudentName=StudentName
        this.semester=semester
        this.s1mark=s1mark
        this.s2mark=s2mark
        this.s3mark=s3mark
     }

#calculateGrade(){  // privatized the method by adding a hashtag
    //  marsks >3=500, A+
    //marks between 400&500 B+
    //marks between 350 & 400 B, otherwise failed

    let sum = this.s1mark+this.s2mark+this.s2mark
    if (sum>500)
    {console.log("A+")

    }
    else if ( sum>=400 && sum<=500){
        console.log("B+")
    }
    else if ( sum >= 350 && sum <400)
{
    console.log("B")
}

else
{
    console.log("Failed")

}
}

displayDetails ()
{
    console.log(this.StudentId)
    console.log(this.StudentName)
    console.log(this.semester)
    console.log(this.s1mark)
    console.log(this.s2mark)
    console.log(this.s3mark)    
this.#calculateGrade()  // abstraction

}

}
let student1 = new Student(101,"Silpa",2,100,200,210)// object creation out of the class block.

student1.displayDetails();



