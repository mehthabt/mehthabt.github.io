/*
 Write a JavaScript function to count the occurrence of a substring in a string. Go to the editor
Test Data :
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
Output :
2
console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false));
Output :
1

 */

let count=(in1,in2)=>{ 
  let re = new RegExp(in2,"ig")
  let str=in1.match(re);
  return str.length;
  
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));



