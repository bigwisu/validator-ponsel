const operators = [
  {
    pattern: /^(\+?62|0)8(11(\d{6,8})|(1[2|3]|2[1|2|3]|5[1|2|3])(\d{8}))$/,
    name: 'telkomsel'
  },
  {
    pattern: /^(\+?62|0)8(1[7|8|9](\d{6,10})|(59|77|78)(\d{8,10}))$/,
    name: 'xl'
  },
  {
    pattern: /^(\+?62|0)8(3[3|8](\d{7,9})|(3[2|1])(\d{8,9}))$/,
    name: 'axis'
  },
  {
    pattern: /^(\+?62|0)8(9[5|6|7|8|9](\d{7,10}))$/,
    name: 'three'
  },
  {
    pattern: /^(\+?62|0)8(1[4|5|6](\d{6,8})|(5[5|6|7|8])(\d{7,10}))$/,
    name: 'indosat'
  },
  {
    pattern: /^(\+?62|0)8(8[1-9](\d{7,9}))$/,
    name: 'smartfren'
  }
];

module.exports = (str) => {
  const toFind = str.replace(/\s+/g, '');
  let found = null;

  operators.forEach((operator) => {
    if (operator.pattern.test(toFind)) {
      found = operator.name;
    }
  });

  return found;
};
