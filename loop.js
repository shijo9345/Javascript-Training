//for in

let person={
    name:'Rahul',
    age:25
};
for(let key in person){
    console.log(key)        //key 
    console.log(person[key])  //value
    console.log(key +":" + person[key])  //key :value
}

let car={
    carname:"BMW",
    price:"$2000",
    Milage:2
}
for(let key in car){
    console.log(key)
    console.log(car[key])
    console.log(key + ":" + car[key])
}
let bike=['bmw','benz']
for (let key of bike)
    {
        console.log(bike)
    }


// Loop 

let a=10
for(a=10;a<20;a++){
    console.log(a)
}
console.log(a)

