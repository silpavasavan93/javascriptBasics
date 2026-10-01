
//inheritance - used for reusability  properties of class  
// parent class - from this class the properties being used
// child class / derived- a class which use the properties of parent class

class Bank {
    constructor(acconutNum, accholderName, Ifsc, minBalance, currentBalance) {
        this.acconutNum = acconutNum
        this.accholderName = accholderName
        this.Ifsc = Ifsc
        this.minBalance = minBalance
        this.currentBalance = currentBalance
    }
        displayBankData()
        {
            console.log(this.acconutNum)
            console.log(this.accholderName)
            console.log(this.Ifsc)
            console.log(this.minBalance)
            console.log(this.currentBalance)
        }
     
}

// new class 
class sbiBank extends Bank {
    //inherit the parent class details

    constructor(acconutNum, accholderName, Ifsc, minBalance, currentBalance, bankName, branchName) {

        // super is the keyword used to access parent class properties & behaviour
        super(acconutNum, accholderName, Ifsc, minBalance, currentBalance)
        this.bankName = bankName
        this.branchName = branchName 
    }
    /*
    displayData() { 
       super.displayBankData(); //  used super keyword
        console.log(this.bankName)
        console.log(this.branchName)
    } 
    */
    displayBankData() { // same function name as parent class
       super.displayBankData(); // so we used super keyword
        console.log(this.bankName)
        console.log(this.branchName)
    }
}

//let sbi = new sbiBank(2255, "Silpa", "SbiN0001", 3000, 5000, "SBI", "Sasthamcotta")


//single level inheritance - 1 parent 1 child 
//hirearchcical inheritance a parent multiple children
// multiple indheritance - multiple parent & 1 child
//multi level inheritance - if a class have  more than one form eg : a is parent of b && child of D
// hybrid inheritance - combining 2 inheritances 
//sbi.displayBankData();

// function name in child& parent class are same - function over riding 
//it is type of polymorphism concept, that is integrated with inheritance
// to avoid overriding 'super' key word should use to refer the parent class
//in side the child class

// new class 
class SbiLife extends sbiBank{

        constructor(acconutNum, accholderName, Ifsc, minBalance, currentBalance, bankName, branchName,LifeId,LifeScheme) {
        super(acconutNum, accholderName, Ifsc, minBalance, currentBalance, bankName, branchName) 
        this.LifeScheme=LifeScheme
        this.LifeId=LifeId
        }
        displayLifeDetails(){
            super.displayBankData() // now this will access the parent sbiBank's function
            console.log(this.LifeId)
            console.log(this.LifeScheme)
        }

}

let life = new SbiLife(1122,"Naitik","SBIN1234",3000,10000,"sbi","Kollam",100001,"Scheme1")
life.displayLifeDetails()