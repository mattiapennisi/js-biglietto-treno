// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
// Bonus:
// Svolgi in bonus in una cartella /bonus nella repo.
// pari/dispari: completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili.
// quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.



// Chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// userKm = parseInt(prompt('Quanti chilometri vuoi percorrere?'))

// userAge = parseInt(prompt('Quanti anni hai?'))

userKm = 50

userAge = 20

console.log(userKm);

console.log(userAge);

kmPrice = (userKm * 0.21) 

if (userAge<18) {
    agePrice = kmPrice * 20 / 100
} else if (userAge >= 65) {
    agePrice = kmPrice * 40 / 100
} else {
    agePrice = kmPrice
}

console.log(agePrice);
