//Promise
//Eg 1
const book=new Promise((resolve,reject)=>{
    let bookingsucces=true;
    if(bookingsucces)
    resolve()
    else
    reject()
  })
  
  book.then(success)
  .catch(failure)
  
  function success(){
    console.log("hy")
  }
  function failure(){
    console.log("helo")
  }

//Eg 2
let promise=new Promise((resolve,reject)=>{
    let trainbooking=true
    if(trainbooking){
        resolve()
    }
    else
    reject()
})

promise.then(()=>console.log(`Thanks buddy `))
.catch(()=>console.log(`failed`))

//Eg 3
let booking=new Promise((resolve,reject)=>{
    let bookingsuccces=true
    if(bookingsuccces){
        resolve(850)
    }
    else
    reject()

})
booking.then((amt)=>console.log(`thanks buddy ${amt}`))
.catch(()=>console.log("Thanks for the try"))


//Eg 4
function helo(){
    return new Promise((resolve,reject)=>{
        let bookingsuccces=true
        if(bookingsuccces){
            resolve(850)
        }
        else
        reject()
    })
}
helo().then(()=>console.log("helo"))
.catch(()=>console.log("hy"))

//Eg 5
//Promise not handle Asyncronous
let reach=new Promise((resolve,reject)=>{
    const reached=true
    if(reached)
        setTimeout(resolve,3000)
    else 
    reject("not reached")
})
reach.then(()=>console.log("helo reached"))
.catch(()=>console.log("not reached"))
function fu(){
    console.log("helo")
}
fu()