/* Functions - Performs Specific task
               Can be called multiple times
               optionally takes input as Parameters and optionally returns values */   

               
//Function Declaration
//Eg:1
function isPositive(num){  //parameter
    return num>0
    }
    console.log(isPositive(4))  //argument
    
    //Eg 2
    function findProduct(a,b){
        return a*b
    }
    console.log(findProduct(2,4))
    
    //Eg 3
    function sayHelo(){
        console.log("helo")
    }
    //Function call
    sayHelo()
    
    //Eg 4
    //Hoisting
    console.log(findProduct(2,4))
    function findProduct(a,b){
        return a*b
    }
    
    //Eg 5
    //Default parameters
    function greet(name="there"){
       console.log(name)
    }
    greet()
    greet("Ram")
    
    
    //Eg 6
    //Function Expression
    let isEven=function(num){   // Hoisting not allowed
       return num%2==0
    }
    console.log(isEven(16))
    
    
    //Eg 7
    let arr=[1,2,3,4,5]
    let findsum=function(){
        let sum=0
        for(let val of arr){
            sum=sum+val
        }
        return sum
    }
    console.log(findsum(arr))
    
    //Eg 8
    //Arrow function
    let array=[1,2,3,4,5]
    let findSum=()=>{
        let sum=0
        for(let val of array){
            sum=sum+val
        }
        return sum
    }
    console.log(findSum(arr))
    
    //Eg 9
    //Arrow function
    let area= (r)=>{
        return Math.PI*r*r
    }
    console.log(area(4))
    
    //Eg 10
    //variable arguments - rest parameters
    let product=(...args)=>{
      let result=1
      for(let val of args){
        result=result*val
      }
      return result
    }
    console.log(product(4,5,6,5))
    
    let product2=()=>{
        let result=1
        for(i=0;i<arguments.length;i++){
            result=result*arguments[i]
        }
        return result
    }
    console.log(product(4,5,6,5))
    
    //Eg 11
    //Recursion
    let num=1
    function show(){
      console.log("hi",num)
      num++
      if(num<10)
        show()
    }
    show()
    
    //Eg 12
    function factorial(num){
        if(num==1)
            return 1
        return num*factorial(num-1) 
    }
    console.log(factorial(4))
    
    