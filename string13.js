/*
 Write a JavaScript function to concatenates a given string n times (default is 1). Go to the editor
Test Data :
console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));
"Ha!" 
"Ha!Ha!" 
"Ha!Ha!Ha!"


 */
let repeat=(input1,input2)=>{
  if(input2==null)
    input2=1;
  return input1.repeat(input2);
}

console.log(repeat('Ha!')); 
console.log(repeat('Ha!',2)); 
console.log(repeat('Ha!',3));