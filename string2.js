/*
Write a JavaScript function to split a string and convert it into an array of words. Go to the editor
Test Data :
console.log(string_to_array("Robin Singh"));
["Robin", "Singh"]
 */

let string_to_array=(input)=>{
  
  let str=input.split(' ');
  return str;
  }

console.log(string_to_array("Robin Singh"));


