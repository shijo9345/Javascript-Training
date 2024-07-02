let fruitName="Mango"
let count=5
let price=20
let total=count*price
console.log(fruitName)
console.log("Total price:"+ total)

var a=20,b=10;
{
  var  a=5;          //global scope
}
console.log(a)

let c=20,d=10;
{
  let  c=5;          //global scope
}
console.log(c)