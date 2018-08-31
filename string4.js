/*
 . Write a JavaScript function to extract a specified number of characters from a string. Go to the editor
Test Data :
console.log(truncate_string("Robin Singh",4));
"Robi"
 */
let truncate_string=(input1,input2)=>{
  return input1.slice(0,input2);
}
console.log(truncate_string("Robin Singh",4));