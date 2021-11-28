# Validator Ponsel
A small tool to lookup a string and identify it as a valid Indonesian mobile operator.

## Available Mobile Operators

<dl>
<dt>Axis</dt>
<dd>Based on prefixes 0838, 0831, 0832, 0833 followed by 7 to 9 digits</dd>
<dt>Indosat</dt>
<dd>Based on prefixes 0814, 0815, 0816 followed by 6 to 8 digits and prefixes 0855, 0856, 0857, 0858 followed by 7 to 10 digits</dd>
<dt>Smartfren</dt>
<dd>Based on prefixes 0881, 0882, 0883, 0884, 0885, 0886, 0887, 0888, 0889 followed by 7 to 9 digits</dd>
<dt>Telkomsel</dt>
<dd>Based on prefix 0811 followed by 6 to 8 digits and prefixes 0812, 0813, 0821, 0822, 0823, 0852, 0853, 0851 followed by 8 digits</dt>
<dt>Three</dt>
<dd>Based on prefixes 0895, 0896, 0897, 0898, 0899 followed by 7 to 10 digits</dd>
<dt>XL</dt>
<dd>Based on prefixes 0817, 0818, 0819 followed by 6 to 8 digits and 0859, 0877, 0878 followed by 8 to 10 digits</dd>
<dl>

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
console.log(nomorTelkomsel); // will result telkomsel

const nomorThree = ponsel('0899 1234 5678');
console.log(nomorThree); // will result three

const nomorXl = ponsel('0817 1234 5678');
console.log(nomorXl); // will result xl

```

## Moving Forward

* I'm very opened for feedback on detection pattern, specially the number of digits
* Also will be interesting if this library can be extended to detect mobile operators from other countries based on the string's format. Contributors wanted!

## License

MIT