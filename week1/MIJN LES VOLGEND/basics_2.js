const w = 1920;
const h = 1080;

const msg1 = 'mijn computer scherm heeft de dimensies van ' + w + 'x' + h + '.';
console.log(msg1);
const msg2 = `mijn computer heeft de dimensies van ${w} x ${h}.`;
console.log(msg2);


//operatore
//-------------------

//Wiskundige operatore

let m = 6 + 2; //optellen ( engels= addition)
m = 4 - 3; // aftrekken (subtraction)
m = 9 * 10; // vermenigvuldigen (multiplication)
m = 3 / 2; // deling (devision)
m = 3 ** 2; // machtsverheffing (exponensiatong)
m = 3 % 2; // rest van een deling (devision remainder)
m++;      //incrementeren = een bij tellen bij de vorige waarde
m--;      //decrementeren een aftrekken van de vorige waarde

m= -4
m= -m  //unaire negatie

m = +m; // Unaire plus
m = false;
m = +m;
console.log(m); 


//toewijzegings operatore (assigment opperator)

let x = 6;
let y = -4;
let z = x; // toekennen (assigment)
z += y; // Addition assignment
z = z + y;
z -= x; // Substraction assignment
z = z - y;
z *= x; // Multiplication assignment
z = z * x;
z /= x; // Division assignment
z = z / x;
z **= -y;
z = z ** y;
z = 17;
z %= x;
console.log(z);

z = x = y;  // allemaal gelijk aan
z += true;  // true ziet hij als 1 dus waarde van Z plus 1
z += false;  // false ziet hij als -1 dus waarde van z min 1

z = 'RandomWoord';
z += true;  // als Z een woord is  en je doet plus true krijg je bv RandomWoordTrue
z = 'Hello';
z += ' World';
z = 4;
z *= 'b'; // NaN = Not a Number komt hij zeggen omdat b tussen aanhaaltekens staat en nog geen waarde heeft
console.log(z);

// Logische operatoren (Eng. Logical Operators)
x = true;
y = false;
z = x && y; // AND operator (beide operanden moeten true zijn om als resultaat true te krijgen)
console.log(z);
z = x || y; // OR operator (een van de operanden moet true zijn om als resultaat true te krijgen)
z = !y; // NOT operator (inverse van de boolean waarde)
console.log(z);
