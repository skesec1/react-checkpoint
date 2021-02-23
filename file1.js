//TEMPLATE LITERALS instead of " " + " " + " "...

let generateAddress = (city, state, country = "USA") => {
    console.log(`${city}, ${state}, ${country}`);
}

generateAddress('Martinsburg', 'WV');