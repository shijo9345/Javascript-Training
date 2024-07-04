//basic callback
//Eg 1
function greet(name,callback){
    console.log("helo "+name)
    callback()
}
//callback function

function welcome(){
    console.log("welcome")
}
greet("Ram",welcome)   

//Call Back
//Eg 2
function constant(){
    console.log("hy")
}
function he(){
    console.log("hy hy")
}
function greet(callback){
  callback()
}

greet(constant)

//callback with async function
// Eg 3
function printlog(name,calback){
    //async function/step
    setTimeout(function(){
        console.log("helo "+name)
        calback("plz call me")
    },500)
}
//callback
function displayMessage(msg){
    console.log(msg)
}
printlog("Ram",displayMessage)