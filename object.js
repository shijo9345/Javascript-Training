//For avoiding number a of variables we use objects 
/* let person="name"
   let age=24
   let gender="Female" */

//Object 
let details={
    name:"Rahul",
    age:24,
    gender:"Female"
}
details.age=20   //update
//Dot notation
console.log(details.age)

//Bracket Notation
console.log(details["age"])

//Merge 2 objects
let person1={
    name:"Ram",
    age:24,
    gender:"Female"
}
let person2={
    dob:23255,
    weight:45
}
Object.assign(person1,person2)
console.log(person1)

let person3=Object.assign({},person1)   //cloning
console.log(person3)

//Complex object
let car={
    name:"bmw",
    milage:10,
    bike:{
      capacity:2
    }
}
console.log(car.bike.capacity)  //.notation
console.log(car['name'])        //bracket notation

//Object method
let laptop={
    cpu:'i9',
    ram:16,
    brand:'HP',

    greet:function(){
        console.log("Helo",laptop.brand)
        console.log(this.brand)  //this keyword
    }
}
laptop.greet()

//Constructor Function
function Alien(name,tech){
    this.name=name
    this.tech=tech
}
let alien1= new Alien('Navin','JS');    //we can diferntiate normal function  
let align2=new Alien('Kiran','Java')    //and constructor function using capital letter 

console.log(alien1)