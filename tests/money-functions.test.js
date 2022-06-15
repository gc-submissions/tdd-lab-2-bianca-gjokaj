const {formatCurrency, getCoins} = require('../src/js/money-functions');

describe("formatCurrency", () => {
  test('Given the amount 0, it returns $0.00', () => {
    const amount = 0;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('$0.00');

  });

  test('Given the amount 1, it returns $1.00', () => {
    const amount = 1;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('$1.00');

  });

  test('Given the amount 1.5, it returns $1.50', () => {
    const amount = 1.5;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('$1.50');

  });

  test('Given the amount 0.01, it returns $0.01', () => {
    const amount = 0.01;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('$0.01');

  });

  test('Given the amount 527.6789, it returns $527.68', () => {
    const amount = 527.6789;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('$527.68');

  });

  test('Given the amount -1, it returns -$1.00', () => {
    const amount = -1;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('-$1.00');

  });

  test('Given the amount 100, it returns $100.00', () => {
    const amount = 100;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('$100.00');
  });

  test('Given the amount -50, it returns -$50.00', () => {
    const amount = -50;
    const formattedCurrency = formatCurrency(amount);

    expect(formattedCurrency).toBe('-$50.00');
  });
});

describe("getCoins", () => {
  test("32 cents produces: quarters: 1, nickels: 1, dimes: 0, pennies: 2", () => {
    const cents = 32;
    const coins = getCoins(cents);

    expect(coins).toEqual({quarters: 1, nickels: 1, dimes: 0, pennies: 2});
  });

  test("10 cents produces: quarters: 0, nickels: 0, dimes: 1, pennies: 0", () => {
    const cents = 10;
    const coins = getCoins(cents);

    expect(coins).toEqual({quarters: 0, nickels: 0, dimes: 1, pennies: 0});
  });

  test("27 cents produces: quarters: 1, nickels: 0, dimes: 0, pennies: 2", () => {
    const cents = 27;
    const coins = getCoins(cents);

    expect(coins).toEqual({quarters: 1, nickels: 0, dimes: 0, pennies: 2});
  });

  test("68 cents produces: quarters: 2, nickels: 1, dimes: 1, pennies: 3", () => {
    const cents = 68;
    const coins = getCoins(cents);

    expect(coins).toEqual({quarters: 2, nickels: 1, dimes: 1, pennies: 3});
  });
});