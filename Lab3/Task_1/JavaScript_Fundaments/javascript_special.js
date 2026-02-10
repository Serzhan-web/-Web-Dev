let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");
alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true


alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string


alert( 0 == false ); // true
alert( 0 == '' ); // true


let age = prompt('Your age?', 18);
switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;
  case "18":
    alert("This works!");
    break;
  default:
    alert("Any value not equal to one above");
}


