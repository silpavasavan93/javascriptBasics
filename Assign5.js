//1. Create a class Mobile with brand, model, and price. Create a method displayDetails(). Create at least three mobile objects

/*class mobile{
    constructor (brand,model,price){
   
        this.brand=brand
        this.model=model
        this.price=price
    }    

     displayDetails(){
        console.log(this.brand)
        console.log(this.model)
        console.log(this.price)
    }
}
 let mob  =new mobile("Apple","18 Pro",160000)
 

 mob.displayDetails()
 */
 // 2. Create a class Employee with name and experience. Create a function that displays: "Fresher"
 // if experience is less than 1 year. "Junior" if experience is 1–3 years. "Senior" if experience is more than 3 years. 
/*
 class Employee {
    constructor(name,experience){
        this.name = name 
        this.experience = experience
    }

    displayDetails(){
        console.log(this.name)
        console.log(this.experience)
    }
    
    FindExperience(){
        if ( this.experience < 1) {
            console.log("Fresher")
        }
        else if ( this.experience>=1 && this.experience<=3)
        {console.log("Junior")}
        else
        {
            console.log("Senoir")
        }   
         
    }
 }
  let emp = new  Employee ("Silpa",0)

  emp.displayDetails()
  emp.FindExperience()
  */


  //3. Create a Car class with brand, model, and speed. accelerate()
  //  should increase speed by 10. brake() should decrease speed by 10. Speed should never become negative.

  class Car {
    constructor(brand,model,speed) {
        this.brand =brand
        this.model = model
        this.speed = speed
    }

    accelerate (){        
        this.speed=this.speed+10
        console.log(this.speed)
    }

    break (){
        if ( this.speed>=10)
        {
            this.speed = this.speed-10
            console.log(this.speed)
        }
        else {
            console.log(" Enter a number which is greater than 10 ")
        }
    }
}
  let car1 =new Car ("Audi","SQ8",5)
  car1.accelerate();
  car1.break()
  car1.break ()