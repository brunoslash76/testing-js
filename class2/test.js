const {sum, subt} = require('./math');

let result, expect;

result = sum(3, 7);
expect = 10;

if (result !== expect) {
    throw new Error(`${result} is not equal to ${expect}`)
}

result = subt(7, 3);
expect = 4;

if (result !== expect) {
    throw new Error(`${result} is not equal to ${expect}`)
}