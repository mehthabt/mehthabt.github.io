/*
 Write a JavaScript function to convert a string in abbreviated form. Go to the editor
Test Data :
console.log(abbrev_name("Robin Singh"));
"Robin S."

 */

let abbrev_nam=(input)=>{
  let num=input.indexOf(" ");
  return console.log(input.slice(0,num+2)+".")
  
}

abbrev_nam("robin singh");
/*
Exception: TypeError: input.splice is not a function
abbrev_nam@Scratchpad/5:12:22
@Scratchpad/5:16:1
*/