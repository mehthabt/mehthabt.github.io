/*
 Write a JavaScript function that can pad (left, right) a string to get to a determined length. Go to the editor
Test Data :
console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));
Output : 
"0123" 
"12300000"
 */

let formatted_string=(in1,in2,in3)=>{
  in2=in2.toString();
  let num1=in1.length;
  let num2=in2.length;
  let sum=num1-num2;
   in1=in1.slice(-sum);
  
  if(in3=='l') 
      return in1.concat('',in2);
  else
    return in2.concat('',in1);
  }

console.log(formatted_string('0000',123,'l'));
console.log(formatted_string('00000000',123,''));



/*
Exception: TypeError: in2.concat is not a function
formatted_string@Scratchpad/3:19:12
@Scratchpad/3:23:13
*/