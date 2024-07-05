function fn(){
    return "helo"
}
console.log(fn())

//Async - always return a promise
//Eg 1
async function fun(){
    return "Helo"
}
console.log(fun())
//fun().then((msg)=>console.log(msg))

//Eg 2
// let reach=new Promise((resolve,reject)=>{
//     const reached=true
//     if(reached)
//         setTimeout(resolve,3000)
//     else 
//     reject("not reached")
// })
// reach.then(()=>console.log("helo reached"))
// .catch(()=>console.log("not reached"))
// function fu(){
//     console.log("helo")
// }
// fu()

//Eg 3
let reach=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
        setTimeout(resolve,3000,"helo reached")
    else 
    reject("not reached")
})

async function asyncstatus(){
    console.log("hhi")
    res=await reach
    console.log(res)
    console.log("bye")
}
asyncstatus()

//Eg 4
let reached=new Promise((resolve,reject)=>{
    const reached=false
    if(reached)
        setTimeout(resolve,3000,"helo reached")
    else 
    reject("not reached")
})

async function asyncStatus(){
    try{
        console.log("hhi")
        res=await reached
        console.log(res)
        console.log("bye")
    }
    catch(err){
        console.log(err)
    }   
}
asyncStatus()