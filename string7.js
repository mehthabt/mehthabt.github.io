/*
 Write a JavaScript function to parameterize a string. Go to the editor
Test Data :
console.log(string_parameterize("Robin Singh from USA."));
"robin-singh-from-usa"

 */

let string_parameterize=(input)=>{
 let reg=/\s/g;
  let str=input.replace(reg,'-');
  
  return str.toLowerCase();
}





console.log(string_parameterize("Robin Singh from USA."));