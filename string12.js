/*
  Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_'));
"hello world" 
"hello-world" 
"hello_world"
 */
let uncamelize=(input,inp)=>{
  if(inp==null)
    inp=" ";
 let reg=/[A-Z]/;
  let num=input.search(reg);
  let str=input.split('');
  str.splice(num,0,inp);
 str=str.join('');
  return str.toLowerCase();
}


console.log(uncamelize('helloWorld')); 
console.log(uncamelize('helloWorld','-')); 
console.log(uncamelize('helloWorld','_'));



