const {sum, subt} = require('../common/math');

test('sum adds number', () => {
    const result = sum(3, 7);
    const expected = 10;
    expect(result).toBe(expected)
});

test('subt subtracts numbers', () => {
    const result = subt(7, 3);
    const expected = 4;
    expect(result).toBe(expected)
});

function test(title, callback) {
    try {
        callback();
        console.log(`√ ${title}`);
    } catch (e) {
        console.error(`X ${title}`);
        console.error(e);
    }
}

function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not equal to ${expect}`)
            }
        }
    }
}