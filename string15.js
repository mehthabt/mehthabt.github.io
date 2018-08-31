/*
Write a JavaScript function to humanized number (Formats a number to a human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th. Go to the editor
Test Data :
console.log(humanize_format()); 
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 
"1st" 
"8th" 
"301st" 
"402nd"
 */

let humanize_format=(input)=>{
  let num=input%10;
  if(input!=null)
  switch(num)
{
  case 1:return input+"st";break;
  case 2:return input+"nd";break
  case 3:return input+"rd";break;
  default:return input+"th";break;
}

  
}
console.log(humanize_format()); 
console.log(humanize_format(1)); 
console.log(humanize_format(8)); 
console.log(humanize_format(301)); 
console.log(humanize_format(402)); 
