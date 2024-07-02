// If else - Conditional Statement

let password=true
if(password){
    console.log("You are logged")
}
else{
    console.log("Incorrect password")
}

let a=false
if(a){
    console.log("true")
}
else{
    console.log("false")
}



//Switch Case

let value=0;
switch (typeof value){
    case "number":
        console.log("Number")
        break;
    case "string":
        console.log("String")
        break;
    case "boolean":
            console.log("Boolean")
            break;
    default:
        console.log("Other")
}

let amount=200
switch(true){
    case amount>150 && amount<300:
        console.log("You can buy a earphone")
        break;
    case amount<100:
        console.log("Can't buy a earphone")
        break;
}