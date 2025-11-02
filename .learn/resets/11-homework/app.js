const fromEuroToDollar = function(valueInEuro) {

    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    let valueInDollar = valueInDollar * 153.95;
    return valueInDollar;
}

const fromYenToPound = function(valueInYen) {
    let valueInYen = valueInYen * 0.0049;
    return valueInYen;
}


const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));

module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};