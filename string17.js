/*
Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
Test Data :
console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3));
["w3resource"] 
["w3", "re", "so", "ur", "ce"] 
["w3r", "eso", "urc", "e"]
 */

let string_chop=(in1,in2)=>{
  let a=0,b=in2,i=0;
  let arr=[];
  if(in2!=null){
  while(i!=Math.ceil((in1.length)/in2)){
    let str=in1.slice(a,b);
    arr.push(str);
    a=b;
    b+=in2;
    i++}
  
    return arr;}
  else
    return in1.split(' ');}



console.log(string_chop('w3resource')); 
console.log(string_chop('w3resource',2)); 
console.log(string_chop('w3resource',3));