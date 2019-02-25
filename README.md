# Validator Ponsel
A small tool to lookup a string and identify it as a valid Indonesian Mobile Operator
This library will also detect the operator.

## Install

```npm install validator-ponsel```

## Usage

```
const ponsel = require('validator-ponsel');

const nomor = ponsel('0817 1232 9977');
console.log(nomor); // will result xl
```