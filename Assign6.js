//1. Create an Employee class with private #attendance.
//  Create methods: markAttendance() getAttendance() Do not allow attendance to be modified directly

class Employee {
     #attendance 
    constructor (attendance){
        this.#attendance=attendance
    }

markAttendance() {
    this.#attendance++
    console.log("Marked todays attendence ")
}

getAttendance () {
   console.log( this.#attendance)
   console.log("attendence is "+this.#attendance)
}
}

let emp1 = new Employee(1);

emp1.markAttendance()
emp1.getAttendance()


//2. Create a Notification class with send().
// - Hide its functionality Create functions: EmailNotification, SMSNotification, and PushNotification. Use send() in the functios

class Notification
{
     #send(){
      console.log("send notification")
      
    }
 EmailNotification(){
    this.#send()
    console.log("via email")
    }

 SMSNotification(){
    this.#send()
    console.log("via SMS")
     }
 PushNotification(){

    this.#send()
    console.log("via pushnotification")
    }
}
let obj = new  Notification


obj.EmailNotification()
obj.SMSNotification();
obj.PushNotification()