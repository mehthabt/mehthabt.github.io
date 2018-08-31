/*
 Write a JavaScript function to truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters. Go to the editor
Test Data :
console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises." 
"We are doing JS ..." 
"We are doing !!"

 */

let text_truncate=(in1,in2,in3)=>{
  if(in2==null && in3==null)
    return in1;
  else if(in3==null)
    {
     in1=in1.slice(0,in2-3);
       return in1.padEnd(in2,'.');
    }
  let num=in3.length;
   in1=in1.slice(0,in2-num);
  return in1.padEnd(in2,in3);
  

}

console.log(text_truncate('We are doing JS string exercises.')) 
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))


