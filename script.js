// Zadatak 1

// Zadate su tri promenljive x = 3, y = -4 i z = x - y

// a ) Napisati if petlju tako da :
// 	ako je zbir prve dve promenljive pozitivan broj ispisati "Zbir prve dve je pozitivan broj ",
// 	u suprotnom ako je razlika prve dve promenljive pozitivan broj ispisati "Razlika prve dve je pozitivan broj"

// b ) Napisati if petlju tako da :
// 	ako je proizvod prve i trece varijable broj veci od 15 i ako je druga varijabla negativna
// 	ispisati "Proizvod prve i trece je veci od 15 i druga varijable je negativna"
// 	u suprotnom ako je proizvod prve i trece varijable broj veci od 15 ili ako je druga varijabla pozitivna
// 	ispisati "Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna"
// var x = 3;
// var y = -4;
// var z = x - y;

// a
// if(x+y > 0){
// console.log("Zbir prve dve je pozitivan broj ");
// }else if (x-y > 0) {
//   console.log("Razlika prve dve je pozitivan broj");
// }
// b
// if (x * z > 15 || y < 0) {
//   console.log('Proizvod prve i trece je veci od 15 i druga varijable je negativna');
// } else if (x * z > 15 || y > 0) {
//   console.log('Proizvod prve i trece je broj veci od 15 ili je druga varijabla pozitivna');
// }

// Zadatak 2

// let godina = prompt("Koje godine je počeo prvi svetski rat?");

//   if (godina == 1914){
//     alert("Odgovor je tačan");
//   }

// Zadatak 3

// Traženje parnog broja

// var broj =prompt("Unesi broj");

// if (broj % 2 === 0) {
//   alert("Broj je paran");
// }else if ( broj % 2 === 1) {
//   alert("Broj je neparan");
// }else {
//   alert("Niste uneli broj");
// }

// Zadatak 4

// Pitanja i bodovanje tačnih odgovora

// var bodovi = 0;

// var pitanje1 = prompt("1. Glavni grad Srbije");

// if (pitanje1 == "Beograd") {
//   bodovi = bodovi + 3;
//   alert("Tačno, osvojili ste tri boda");
// }else {
//   alert("Netačan odgovor niste osvojili bodove");
// }

// var pitanje2 = prompt("2. Glavni grad Rusije?");

// if(pitanje2 == "Moskva") {
//   bodovi = bodovi +3;
//   alert("Tačno, osvojili ste tri boda");
// }else {
//    alert("Netačan odgovor niste osvojili bodove");
// }

// var pitanje3 = prompt("3. Glavni grad Nemačke");

// if(pitanje3 == "Berlin") {
//   bodovi = bodovi + 3;
//   alert("Tačno, osvojili ste tri boda");
// }else {
//   alert("Netačan odgovor niste osvojili bodove");
// }
// var pitanje4 = prompt("4. Glavni grad Francuske");

// if( pitanje4 == "Pariz") {
//   bodovi = bodovi +3;
//   alert("Tačno, osvojili ste tri boda");
// }else {
//   alert("Netačan odgovor niste osvojili bodove");
// }

// var pitanje5 = prompt("5. Glavni grad Italije");

// if( pitanje5 == "Rim") {
//   bodovi = bodovi + 3;
//   alert("Tačno, osvojili ste tri boda");
// }else {
//   alert("Netačan odgovor niste osvojili bodove");
// }

// Zadatak 5

// Traženje parnog broja u jednoj liniji

// var broj = prompt("Unesi broj");

// ( broj %2 == 0) ? alert("Broj je paran") : alert("Broj je neparan");

// Zadatak 6

//Unos dva broja i traženje većeg

// var prviBroj= prompt("Unesi prvi broj");
// var drugiBroj= prompt("Unesi drugi broj");
// var max;

// if(prviBroj > drugiBroj) {
//   max = prviBroj;
//   alert("Prvi broj: "+ max + " je veći.");
// }else if ( drugiBroj > prviBroj) {
//   max = drugiBroj;
//   alert("Drugi broj: " + max + " je veći.")
// }else {
//   alert("Brojevi su isti");
// }

// Zadatak 7

// Otvaranje i zatvaranje radnje

// var datum = new Date();

// var sat = datum.getHours();
// var i;

// for(i = 7; i <= sat; i++);

// if(sat < 7 || sat > 15) {
//   alert("Radnja je zatvorena, otvara se za: " + i + "sati.")
// }else {
//   alert("Radnja je otvorena.")
// }

// Zadatak 8

// Napraviti promenljivu korisničkoIme i promenljivu lozinka i dodeliti im neku string vrednost.
// Pristup je dozvoljen ukoliko je korisničko ime "administrator" i ukoliko je lozinka "enigma".
// Izvršiti proveru i ispisati "Dobrodošli" ukoliko je pristup dozvoljen ili "Pristup odbijen" ukoliko su
// uneti netačni podaci.

// var korisnickoIme = prompt("Unesi korisničko ime:");
// var lozinka = prompt("Unesi lozinki:");

// (korisnickoIme == "administrator") ? alert("Dobrodošli") : alert("Pristup odbijen");

// Zadatak 9

// Potrebno je razmisliti i predvideti šta će vratiti sledeći uslovi , true ili false:

// true && true -> true****
// true && false -> false
// false && true -> false
// false && false -> false

// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false***

// true || true) = 1
// (true || false) = 1
// (false || true) = 1
// (false || false) = 0

// (true && true) = 1
// (true && false) = 0
// (false && true) = 0
// (false && false) = 0

// 1(!(5>6 || 6>5));
// 2(!(5>6 && 6>5))
// 3( 3>2 || 2>3 || 1>2)
// 4(3>2 && 2>3 && 1>2)
// 5(!( 3>2 || 2>3 || 1>2))
// 6(!(3>2 && 2>3 && 1>2))

// // rešenje
// // false || false -> false***
// // true && true -> true****
// console.log (!(false|| true)); //true
// console.log(!(false && true)); // false ! = true
// console.log(true || false || false); // true
// console.log(true && false && false); // false
// console.log(!(true || false || false)); // true ! = false ???? u rešenju je true dal je greška
// console.log(!(true && false && false)); // false ! = true

// Zadatak 10

// Napraviti tri niza od kojih prvi treba da sadrži kolekciju stringova , drugi kolekciju brojeva dok
// treći treba da sadrži kolekciju promenljivih.

// var stringovi = ["Pekinezer", "Doberman", "Pudlica", "Mops"];
// var brojevi = [1,2,3,4,5,6];
// var promenjive = [stringovi, brojevi];

// console.log(brojevi.length);
// console.log(stringovi.length);
// console.log(stringovi[2]);
// console.log(brojevi[3]);

// Zadatak 11

// NAPRAVITI OBJEKAT OSOBA.
// OBJEKAT TREBA DA SADRZI: IME, PREZIME, GODINU RODJENJA I PREBIVALISTE

// var osoba = {
//   ime: "Sandra",
//   prezime: "Balog",
//   godinaRodjenja: 1987,
//   prebivalište: "Novi Sad"
// }
// console.log(osoba.prebivalište);
// console.log("Zovem se " + osoba.ime + " prezivam se " + osoba.prezime + " rodjena sam " + osoba.godinaRodjenja + " u " + osoba.prebivalište);

// Zadatak 12
//object  array

// var imena = [ "Sandra", "Pera", "Djoka", "Marina"];

// console.log(imena[1]);
// console.log(typeof imena);
// console.log(imena.length);

// Zadatak 13

// functions

// function showMyName (name) {
//   console.log("My name is " + name);
// }

// showMyName("Kosta");
// showMyName("Marica");
// showMyName("Lazar");

// Zadatak 14
// template literals

// var name1 = "Pera";
// console.log(`My name is ${name1}`);

// Zadatak 15 *** Interesantan zadatak

// exercise problem : swap two numbers

// var apple = 10;
// var orange = 20;
// var temp = apple;

// apple = orange;
// orange = temp;
// console.log(apple, orange);

// Zadatak 16

// Problem : Our grading system
// take Number
// if the mark is in between 80 - 100 print A+
// if the mark is in between 70 - 79 print A
// if the mark is in between 60 - 69 print A-
// if the mark is in between 50 - 59 print B
// if the mark is in between 40 - 49 print C
// if the mark is in between 33 - 39 print D
// if the mark is in between 0 - 32 print F
// Also point out the invalid marks

// var mark = 59;

// if (mark < 0 || mark > 100) {
//   console.log('Invalid mark');
// } else if (mark >= 80 && mark <= 100) {
//   console.log('A+');
// } else if (mark >= 70 && mark <= 79) {
//   console.log('A');
// } else if (mark >= 60 && mark <= 69) {
//   console.log('A-');
// } else if (mark >= 50 && mark <= 59) {
//   console.log('B');
// } else if (mark >= 40 && mark <= 49) {
//   console.log('C');
// } else if (mark >= 33 && mark <= 39) {
//   console.log('D');
// } else if (mark > 0 && mark <= 32) {
//   console.log('F');
// }

// Zadatak 17

// exercise : FizzBuzz
// take Number
// if it is divisibled by 3 print Fizz
// if  it is divizible by 5 print Buzz
// if it is divizible by both 3 & 5 print fizzbuzz
// otherwise print nothing

// var number = 3;

// if ( number % 3 === 0) {
//   console.log("Fizz");
// } else if ( number % 5 === 0) {
//   console.log("Buzz");
// } else if ( number % 3 && number % 5) {
//   console.log("Fizz Buzz");
// }

// console.log(
//   number % 3 === 0 && number % 5 === 0
//     ? 'FizzBuzz'
//     : number % 5 === 0
//     ? 'Bazz'
//     : number % 3 === 0
//     ? 'Fizz'
//     : 'Nothing'
// );
