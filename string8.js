/*Write a JavaScript function to capitalize the first letter of a string. Go to the editor
Test Data :
console.log(capitalize('js string exercises'));
"Js string exercises"


 */

let capitalize=(input)=>{
  return input.replace(input[0],input[0].toUpperCase());
}



console.log(capitalize('js string exercises'));