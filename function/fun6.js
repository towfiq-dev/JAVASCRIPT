function myFun(num1, num2) {
  let sum = num1 + num2
  console.log(sum);
  if (sum%2==0) {
    console.log('Yes, is this true.');
    
  }else{
    console.log('sorry, is this false');
    
  }
  
  return myFun
}

//myFun(50, 100)
const mySum = myFun(50, 100)
console.log('Hello');
