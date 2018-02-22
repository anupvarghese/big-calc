import BigNumber from 'bignumber.js';

const add = a => b => {
  return new BigNumber(a).plus(new BigNumber(b));
};

const subtract = a => b => {
  return new BigNumber(a).minus(new BigNumber(b));
};

const multiply = a => b => {
  return new BigNumber(a).multipliedBy(new BigNumber(b));
};

const divide = a => b => {
  return new BigNumber(a).dividedBy(new BigNumber(b));
};

const percentage = a => b => {
  return new BigNumber(a).dividedBy(new BigNumber(b)).multipliedBy(100);
};

const negate = a => multiply(a)(-1);

const clear = () => new BigNumber(0);

const calculator = {
  '+': add,
  '-': subtract,
  X: multiply,
  '/': divide,
  '%': percentage,
  '+/-': negate,
  AC: clear,
};

export default calculator;
