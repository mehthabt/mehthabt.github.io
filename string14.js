/*
. Write a JavaScript function to insert a string within a string at a particular position (default is 1).Go to the editor
Test Data :
console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18));
"We are doing some exercises." 
"JavaScript We are doing some exercises." 
"We are doing some JavaScript exercises."
 */

let insert=(in1,in2,in3)=>{
  if(in2==null && in3==null)
    return in1;
  else if(in3==null)
    return in2.concat('',in1)
  else{
  let str1=in1.slice(0,in3)
  let str2=in1.slice(in3);
  return str1.concat('',in2,'',str2)
}}
console.log(insert('We are doing some exercises.')); 
console.log(insert('We are doing some exercises.','JavaScript ')); 
console.log(insert('We are doing some exercises.','JavaScript ',18)); 
