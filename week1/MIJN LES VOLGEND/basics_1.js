/*
Programming 1 essentials
Week: 1
Date 6-10-2023
*/
firstName = "Sander";
greeting = "Hello World";
console.log(firstName);
console.log(greeting);

PI = 3.14;
LOADED_PARKING_DATA = "this is the data";
// Output of the variable to the console
console.log(PI);


// UITLEG VAR

// declaratie (en. declaration)
var a; //Declaratie van een variabele a
console.log(a); // de variabele standaard heeft standaard de waarde undefined
a = 9999; // toewijzing van de variabele a
console.log(a); 

var b = 12345; // declaratie + toewijzing in een instructie !!
console.log(b);

//UITLEG CONST

const c = "Jana"; // const in een constante variabele waaraan direct een waarde toegekend moet worden
console.log(c);
// c = "Pipi"; b heeft al een declaratie dus kan niet nog een declaretie krijgen

//const test

const ab = "Sander moet gaan werken";
console.log(ab);


//UITLEG LET

let d = "Jana";
d = "Pipi";
console.log(d)

/*
Datatypes built-in
------------------
*/

//STRINGS

const nickName = "Eachgolem";
const email = 'eachgolem@gmail.com';
console.log(nickName, email);
console.log(nickName + email);

const q = 2;
const z = 3;
console.log(q+z); //test met het optellen in uitwerken console

// BOOLEAN

const isFemale = false;
const isStudent = true;

/*
The four codes specified in ISO/IEC 5218 are:
  0 = Not known;
  1 = Male;
  2 = Female;
  9 = Not applicable.
*/
let gender = 0;
gender = 1;
console.log('my gender is', gender);

let height = 1.89;
console.log('the height of', nickName, 'is', height,'m');
console.log('the height of ' + nickName + ' is ' + height + 'm ');

//undifined
let level; //undifined is the standard value
console.log(level);


//NULL

let data = null;
console.log(data);
data = 'this is the data base';

// back to a string database

let poem = 
'Jana in het licht,\n\
Cafebetoging. Xander,\n\
Samen staan ze sterk.';
console.log(poem);

let poem2 = 
'De lego Star wars destroyer van set 75055 en met de 3 boekjes.,\n\
Ook de doos heb ik nog hieraan is er wel lichte gebruikersschade aan de zijkanten.,\n\
Met de 5 originele karakters.';
console.log(poem2);

let quote = "I'm a programmer";
quote = 'I\'m a full-stack devaloper'; // BACKSLASH GEBRUIKEN BIJ DE I'M ANDERS STOPT HIJ DAAR WEGENS GEEN DUBBELE AANHANGSTEKENS MOGEN GEBRUIKEN
console.log(quote);

const rules = 'First rule\nSecond rule'; // BACKSLASH KAN OOK GEBRUIKT WORDEN OM EEN NIEUWE REGEL TE STARTEN (ZOALS BIJ DE POEM)
console.log(rules);


const fName = 'Sander';
const fFname = 'Fjodor';
const lName = 'Mortier';

let fullName = fName + ' ' + fFname + ' ' + lName;
console.log(fullName);

let poem3 = 'ik zit in betoog te studeren.,\n\
ahja ik snap het terug ik had een nieuw haakje geopend\n\
en dat was niet nodig ik had gewoon eentje moeten sluiten op einde';
console.log(poem3);

//template liturale

let poem5 =          // het tekentje ` NAAST ENTER kan je ook gebruiken ipv \n\ om enters te hebben
`Jana in het licht,
Cafebetoging. Xander,      
Samen staan ze sterk.`;
console.log(poem);

fullName = `hallo ik ben ${fName} ${fFname} ${lName}
en ik zou graag het gedicht ${poem} aan u voordragen`;    //door ${} te gebruiken kan ik hele blokken aan spreken zonder ze nog eens te typen
console.log(fullName);

let age = 23;

const message = `mijn naam is ${fName} ${fFname} ${lName} en ik ben ${age} jaar oud`;
console.log(message);
