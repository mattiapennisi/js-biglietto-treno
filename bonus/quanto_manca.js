// PARI E DISPARI:

// Prompt per far scegliere all'utente se pari o dispari e quale numero vuole giocare compreso tra 1 e 9

const userChoice = prompt("Scegli pari o dispari (esempio 'pari', 'dispari')")

const userNumber = parseInt(prompt("Inserisci valore numerico tra 1 e 9 (esempio '4')"))

console.log(userChoice)

console.log(userNumber)

// Il pc genera un numero casuale compreso tra 1 e 9

let randomNumber = Math.floor(Math.random()*9)+1

console.log(randomNumber)

alert(`Il pc ha scelto ${randomNumber}`)

// Somma il numero dell'utente e quello del pc

const result = userNumber + randomNumber

console.log(result)

// Stabilisci se la somma è pari o dispari

const evenOdd = result % 2

console.log(evenOdd)

// Stabilisci se la scelta dell'utente tra pari e dispari corrisponde alla somma e lo stampi a schermo

function isResultEvenOrOdd () {

    if (userChoice == 'pari' && evenOdd == 0) {
        alert('Hai vinto!')
    }

    if (userChoice == 'pari' && evenOdd == 1) {
        alert('Hai perso!')
    }

    if (userChoice == 'dispari' && evenOdd == 0) {
        alert('Hai perso!')
    }

    if (userChoice == 'dispari' && evenOdd == 1) {
        alert('Hai vinto!')
    }
}

isResultEvenOrOdd()

// QUANTO MANCA: Stabilire l'ora attuale e attraverso una operazione matematica stabilire i minuti mancanti allo scoccare della prossima ora.  Oltre a Math ci sono anche altre funzionalitá di javascript (built-in) che possiamo usare senza installazioni come ad esempio le funzioni dell'oggetto Date.

