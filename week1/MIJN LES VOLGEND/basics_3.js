let height = 1.85;
const FirstName = 'Sander';
let isMarried = false;
console.log(typeof height);
console.log(typeof FirstName);
console.log(typeof isMarried);

// make a new instance of the day class

let now = new Date();
console.log(now instanceof Date);

let msg = 'mijn leeftijd is ' + 23;
console.log(msg);
msg = '30' - 6;
console.log(msg);

let v;
v = parseInt('101', 10);
console.log(v);
v = parseInt('101', 8); // Octaal
console.log(v);
v = parseInt('101', 2); // Binair
console.log(v);
v = parseInt('0x00fe66', 16); // Hexadecimal
console.log(v);
v = parseInt('3.62', 10); // Decimal
console.log(v);
v = parseInt('3.62', 2); // NaN
console.log(v);
v = parseFloat('3.62', 10); // Decimal
console.log(v);

//block statement

{
  const lastName = 'Mortier';
  const nickName = 'eachgolem';
  let age = 23;

}
// als je nu console.log(age) doet krijg je foutmelding want deze info alleen geldig in deze block statement
// werkt ook met nummers zoals let

let p = 100;
{
    let p = 12;
}

console.log(p);

//contitionele statements

//1 IF ... ELSE

//if ()
 //{ 
    // stetements
// }
 //else {
    //statements
// }

if (true) {
    console.log('IT\'S TRUE');
} else {console.log('IT\'S NOT TRUE ');
}

let isALady = false;

if (isALady) {
    console.log('You are a young beautiful lady' )
} else {
    console.log('You are not a beautiful lady you are a boy')
}

 // vanaf hieronder ipv if ... else zijn er meer condities bv else if(gender 0unknown 1male 2female 9nietingegevn)

 let gender = 6;

 if (gender == 0) {
    console.log('Gender is not known.');
 } else if (gender == 1) {
    console.log('Gender is male.');
 } else if (gender == 2) {
    console.log('Gender is female.');
 } else  {
    console.log('Gender is not specified.');
 }
