/*
Write a JavaScript function to convert a string into camel case.Go to the editor
Test Data :
console.log(camelize("JavaScript Exercises")); 
console.log(camelize("JavaScript exercises")); 
console.log(camelize("JavaScriptExercises"));
"JavaScriptExercises" 
"JavaScriptExercises" 
"JavaScriptExercises"

 */
let capitalize_Words=(input)=>{
let str=input.split(' ')
for(let i=0;i<str.length;i++)
  {
    str[i]=str[i].replace(str[i][0],str[i][0].toUpperCase());
  }
  return str.join('');
}
console.log(capitalize_Words('JavaScriptExercises'));