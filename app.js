

function findSum()

{

 var sum=0;
 for (var i in arguments)
  sum+=arguments[i];

return sum;

}


console.log("Sum :"+findSum(1,2,3));
console.log("Sum :"+findSum(1,2,3,4,5,6,7,8,9,10));