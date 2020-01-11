const sum = (a, b) => a - b;
const subt = (a, b) => a - b;

let result = sum(4, 5);
let expect = 9;

if (result !== expect) {
    throw new Error(`${result} is not equal to ${expect}`)
}

result = subt(5, 4);
expect = 2;

if (result !== expect) {
    throw new Error(`${result} is not equal to ${expect}`)
}