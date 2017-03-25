var a=prompt("Podaj wartość a",a),
    b=prompt("Podaj wartość b",b),
    value;
   
value = (a * a) + (2 * a * b) - (b * b);

console.log(value);

//if (value>0) {
//  console.log('wartość dodatnia');
//} else {
// console.log('wartość ujemna');}
//

//(value > 0) ? console.log('wartość dodatnia') : console.log('wartość ujemna');

(value > 0) ? alert(value + ' - wartość dodatnia') : alert(value + ' - wartość ujemna');
