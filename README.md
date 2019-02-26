# Validator Ponsel
A small tool to lookup a string and identify it as a valid Indonesian mobile operator.

## Available Mobile Operators

* Axis
* Indosat
* Smartfren
* Telkomsel
* Three
* XL

## Install

```
npm install validator-ponsel
```

## Usage

```
const ponsel = require('validator-ponsel');

const nomorAxis = ponsel('0838 1234 5678');
console.log(nomorAxis); // will result axis

const nomorIndosat = ponsel('0816 1232 5678');
console.log(nomorIndosat); // will result indosat

const nomorSmartfren = ponsel('0888 1234 5678');
console.log(nomorSmartfren); // will result smartfren

const nomorTelkomsel = ponsel('0812 1234 5678');
console.log(nomorAxis); // will result telkomsel

const nomorThree = ponsel('0899 1234 5678');
console.log(nomorThree); // will result three

const nomorTelkomsel = ponsel('0821 1234 5678');
console.log(nomorTelkomsel); // will result telkomsel
```

## License

MIT