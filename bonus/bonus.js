// Bonus:
// Svolgi in bonus in una cartella /bonus nella repo.
// pari/dispari: completare il live iniziato in classe con Leonardo e risolvere il bug lasciato. L'utente vince solo con pari e se sceglie dispari?  Tips: é necessario l'operatore logico AND usato nella condizione? forse sarebbe meglio separare le due condizioni e verificare prima se il risultato é pari e salvare da qualche parte questa informazione ma occhio all'ambito di visibilitá delle variabili.
// quanto manca:  Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possaimo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.

// PARI E DISPARI:

// Prompt per far scegliere all'utente se pari o dispari e quale numero vuole giocare compreso tra 1 e 9

const userChoice = prompt("Scegli pari o dispari (esempio 'pari', 'dispari')")

const userNumber = parseInt(prompt("Inserisci valore numerico tra 1 e 9 (esempio '4')"))

console.log(userChoice)

console.log(userNumber)

// Il pc genera un numero casuale compreso tra 1 e 9

let randomNumber = Math.floor(Math.random()*9)+1

console.log(randomNumber)
alert(randomNumber)

// Somma il numero dell'utente e quello del pc

const result = userNumber + randomNumber

console.log(result)

// Stabilisci se la somma è pari o dispari

const isEven = result % 2

console.log(isEven)

// Stabilisci se la scelta dell'utente tra pari e dispari corrisponde alla somma

if (userChoice == 'pari' && isEven == 0) {
    alert('Hai vinto!')
}
else if (userChoice == 'dispari' && isEven == 1) {
    alert('Hai perso!')
}
else if (userChoice == 'pari' && isEven == 0) {
    alert('Hai perso!')
}
else if (userChoice == 'dispari' && isEven == 1) {
    alert('Hai vinto!')
}
