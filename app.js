// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
};

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = (valueInEuro) => {
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    //return the dollar value
    return valueInDollar;
};

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = (1 / oneEuroIs.USD) * valueInDollar * oneEuroIs.JPY;
    return valueInYen;
};

const fromYenToPound = (valueInYen) => {
    let valueInPound = (1 / oneEuroIs.JPY) * valueInYen * oneEuroIs.GBP;
    return valueInPound;
};


// this is my function that sums two numbers
const sum = (a, b) => {
    return a + b
};

// just a console log for ourselves.
console.log(sum(7, 3));
console.log(fromEuroToDollar(3.5));
console.log(fromDollarToYen(4.2));
console.log(fromYenToPound(447.7));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};