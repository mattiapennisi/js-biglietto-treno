// QUANTO MANCA: 

// Variabili che generano l'ora

let date = new Date()

let hours = date.getHours()

let minutes = date.getMinutes()

let seconds = date.getSeconds()

// Calcolo quanti minuti mancano alla prossima ora e lo stampo a schermo

let minutesDifference = 60 - minutes

alert(`Sono le ${hours}:${minutes}:${seconds}\n\nMancano ${minutesDifference} minuti alla prossima ora.`)