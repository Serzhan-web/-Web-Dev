let single = 'single-quoted';
let double = "double-quoted";
let backticks = `backticks`;


function sum(a, b) {
  return a + b;
}
alert(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


let guestList = `Guests:
 * John
 * Pete
 * Mary
`;
alert(guestList); // a list of guests, multiple lines


let guestList = "Guests: // Error: Unexpected token ILLEGAL
  * John"


let guestList = "Guests:\n * John\n * Pete\n * Mary";
alert(guestList); // a multiline list of guests, same as above


let str1 = "Hello\nWorld"; // two lines using a "newline symbol"
// two lines using a normal newline and backticks
let str2 = `Hello
World`;
alert(str1 == str2); // true


let str = `Hello`;
// the first character
alert( str[0] ); // H
alert( str.at(0) ); // H
// the last character
alert( str[str.length - 1] ); // o
alert( str.at(-1) );


let str = 'Hi';
str[0] = 'h'; // error
alert( str[0] ); // doesn't work


let str = 'Hi';
str = 'h' + str[1]; // replace the string
alert( str ); // hi


alert( 'Interface'.toUpperCase() ); // INTERFACE
alert( 'Interface'.toLowerCase() ); // interface


let str = 'Widget with id';
alert( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
alert( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
alert( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)


let str = 'As sly as a fox, as strong as an ox';
let target = 'as'; // let's look for it
let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  alert( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}


let str = "As sly as a fox, as strong as an ox";
let target = "as";
let pos = -1;
while ((pos = str.indexOf(target, pos + 1)) != -1) {
  alert( pos );
}


alert( "Widget".startsWith("Wid") ); // true, "Widget" starts with "Wid"
alert( "Widget".endsWith("get") ); // true, "Widget" ends with "get"


let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0