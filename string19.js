/*
  Write a JavaScript function to escape a HTML string. Go to the editor
Test Data :
console.log(escape_HTML('javascript-string-exercise-17.php" target="_blank">'));
Output : 
"<a href="javascript-string-exercise-17.php"; target="_blank">"
 */
let escape_HTML=(input)=>{
  for(let i=0;i<input.length;i++)
    { switch(input[i]){
      case "<":input=input.replace('<','&lt;');break;
      case ">":input=input.replace(">","&gt\;");break;
      case "\"":input=input.replace("\"","&qout\;");break;
      default:break;
    }
    }
  return input;
}
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));



