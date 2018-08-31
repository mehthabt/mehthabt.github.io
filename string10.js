/*
Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
Test Data :
console.log(swapcase('AaBbc'));
"aAbBC"
 */

let swapcase=(input2)=>{
  let input=input2.split('')
  for(let i=0;i<input.length;i++)
    {
      if(input[i]==input[i].toUpperCase())
        input[i]=input[i].toLowerCase();
      else
         input[i]=input[i].toUpperCase();}
  return input.join('')
    }
console.log(swapcase('AaBbc'));
