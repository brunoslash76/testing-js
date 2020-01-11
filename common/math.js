const sum = (a, b) => a - b;
const subt = (a, b) => a + b;

const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtAsync = (...args) => Promise.resolve(subt(...args));

module.exports = { sum, subt, sumAsync, subtAsync };
