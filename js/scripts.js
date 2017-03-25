var a = prompt("Podaj wartość a"),
  b = prompt("Podaj wartość b"),
  value;

value = (a * a) + (2 * a * b) - (b * b);

//if (value > 0) {
 // console.log('wartość dodatnia');
//} else if (value < 0) {
//  console.log('wartość ujemna');
//} else {
//  console.log('wartość 0');
//}

if (value > 0) {
  alert(value + ' - wartość dodatnia');
} else if (value < 0) {
  alert(value + ' - wartość ujemna');
} else {
  alert('wartość 0');
}