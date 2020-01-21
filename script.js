// *Simon says*
// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati

arrayCasuale = [];
arrayUtente = [];
arrayIndovinati = [];

// Con un alert metto a video 5 volte numeri casuali usando un ciclo
for (var i = 1; i <= 5; i++) {
  var numeriCasuali = getRandomIntInclusive(1, 100);
  alert(numeriCasuali);
  // Pusho in un array vuoto questi numeri
  arrayCasuale.push(numeriCasuali);
}
console.log(arrayCasuale);

// Timer di 30 secondi

setTimeout(timer, 3000); //stampa dopo 30 secondi


function timer() {

  // Con un ciclo chiedo all'utente di inserire i numeri che ha precedentemente visto
  for (var j = 1; j <= 5; j++) {
    var numeriUtente = parseInt(prompt("Inserisci il Numero che hai visto precedentemente ?"));
     if (arrayCasuale.includes(numeriUtente)) {
       arrayIndovinati.push(numeriUtente);
    }
  }
  console.log(arrayIndovinati);
  console.log("Il numero di elementi indovinati è di " + arrayIndovinati.length);
}







// Funzione numeri casuali
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
