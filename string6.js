/*
Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
 */
let protect_email=(input)=>{
  let num=input.indexOf('@');
  let str=input.slice(0,5);
  input=input.slice(input.indexOf("@"));
  return str.concat("....",input);
  
}

console.log(protect_email("robin_singh@example.com"));
