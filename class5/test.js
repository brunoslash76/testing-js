const {sumAsync, subtAsync} = require('../common/math');

test('sum adds number', async () => {
    const result = await sumAsync(3, 7);
    const expected = 10;
    expect(result).toBe(expected)
});

test('subt subtracts numbers', async () => {
    const result = await subtAsync(7, 3);
    const expected = 4;
    expect(result).toBe(expected)
});
