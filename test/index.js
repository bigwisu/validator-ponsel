const util = require('util');
const ponsel = require('../index');

const telkomsel = require('./data/telkomsel.json');
const xl = require('./data/xl.json');
const axis = require('./data/axis.json');
const three = require('./data/three.json');
const indosat = require('./data/indosat.json');
const smartfren = require('./data/smartfren.json');

function test(options) {
  const args = options.args || [];
  args.unshift(null);
  if (options.valid) {
    options.valid.forEach((valid) => {
      args[0] = valid;
      if (ponsel(valid) !== options.operator) {
        const warning = util.format(
          'test.%s(%s) failed but should have passed',
          options.operator, args.join(', ')
        );
        throw new Error(warning);
      }
    });
  }
  if (options.invalid) {
    options.invalid.forEach((invalid) => {
      args[0] = invalid;
      if (ponsel(invalid) === options.operator) {
        const warning = util.format(
          'test.%s(%s) passed but should have failed',
          options.operator, args.join(', ')
        );
        throw new Error(warning);
      }
    });
  }
}

describe('Telkomsel', () => {
  it('should validate telkomsel numbers', () => {
    test(telkomsel);
  });
});

describe('XL', () => {
  it('should validate xl numbers', () => {
    test(xl);
  });
});

describe('Axis', () => {
  it('should validate axis numbers', () => {
    test(axis);
  });
});

describe('Three', () => {
  it('should validate three numbers', () => {
    test(three);
  });
});

describe('Indosat', () => {
  it('should validate indosat numbers', () => {
    test(indosat);
  });
});

describe('Smartfren', () => {
  it('should validate smartfren numbers', () => {
    test(smartfren);
  });
});
