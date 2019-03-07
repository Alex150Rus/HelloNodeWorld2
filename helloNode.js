const converter = require('./currency.js');
const Currency = require('./currencyConverter/CurrencyClass');

console.log("HelloNodeWorld!");
const CanadianDollar = converter.USToCanadian(50);

console.log (`50 USD are equal to ${CanadianDollar} canadian dollars`);

const canadianDollars = 50;
converterObject = new Currency(0.91);
console.log(`${canadianDollars} канадских долларов эквивалентно ${converterObject.canadianToUS(canadianDollars)} USD`);