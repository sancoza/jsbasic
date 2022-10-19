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