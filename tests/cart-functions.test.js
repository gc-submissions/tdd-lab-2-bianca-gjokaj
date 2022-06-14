const {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem} = require('../src/js/cart-functions.js');


describe("calculateChange", () => {
  test('When payment is 5 and total is 6 then change will be 1', () => {
    // Arrange
    const total = 5;
    const payment = 6;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBe(1);
  });


  test('When payment is 13.03 and total is 12.3 then change will be 0.73', () => {
    // Arrange
    const total = 12.3;
    const payment = 13.03;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBeCloseTo(0.73);
  });

  test('When payment is 25 and total is 20 then change will be 5', () => {
    // Arrange
    const total = 20;
    const payment = 25;

    // Act
    const change = calculateChange(payment, total);

    // Assert
    expect(change).toBe(5);
  });
});

describe("isSufficientPayment", () => {
  test('When payment is 5 and total is 6 expect isSufficientPayment to return true', () => {
    // Arrange
    const total = 5;
    const payment = 6;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(true);
  })

  test('When payment is 7 and total is 10 expect isSufficientPayment to return false', () => {
    // Arrange
    const total = 10;
    const payment = 7;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(false);
  })

  test('When payment is 3 and total is 3 expect isSufficientPayment to return true', () => {
    // Arrange
    const total = 3;
    const payment = 3;

    // Act
    const isSufficient = isSufficientPayment(payment, total);

    // Assert
    expect(isSufficient).toBe(true);
  })
});

describe("calculateTotal", () => {
  test('calculates the total with one item', () => {
    // Arrange
    const items = [{name: "Ball", price: 4.99}];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toEqual(4.99);
  })

  test('calculates the total with three item', () => {
    // Arrange
    const items = [
      {name: "Ball", price: 3.5}, 
      {name: 'soda', price: 12.99}, 
      {name: 'blanket', price: 0.03}
    ];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toBeCloseTo(16.52);
  })

  test('calculates the total and expect is to be 0', () => {
    // Arrange
    const items = [];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toBe(0);
  })

  test('calculates the total with four item', () => {
    // Arrange
    const items = [
      {name: "Ball", price: 10}, 
      {name: 'soda', price: 12}, 
      {name: 'blanket', price: 20},
      {name: 'clock', price: 10},
    ];

    // Act
    const total = calculateTotal(items);

    // Assert
    expect(total).toBe(52);
  })
});

describe("addItem", () => {
  test('With an empty itemsArray check that the item is added', () => {
    // Arrange
    const itemsArray = [];
    addItem(itemsArray, 'Beans', 3);
    
    // Assert 
    expect(itemsArray).toContainEqual({name: 'Beans', price: 3});

  });

  test('With an itemsArray check that the item is added', () => {
    // Arrange
    const itemsArray = [{name: 'Beans', price: 3}];
    addItem(itemsArray, 'Sugar', 2);
    
    // Assert 
    expect(itemsArray).toContainEqual({name: 'Sugar', price: 2});
  });

  test('With an itemsArray check that the item is added', () => {
    // Arrange
    const itemsArray = [
      {name: 'Beans', price: 3}, 
      {name: 'Chips', price: 2}, 
      {name: 'Avocado', price: 1}
    ];
    addItem(itemsArray, 'Sugar', 2);
    
    // Assert 
    expect(itemsArray).toContainEqual({name: 'Sugar', price: 2});
  });
});

describe("removeItem", () => {
  test("remove items from array", () => {
    const itemsArray = [
      {name: 'Beans', price: 3}, 
      {name: 'Chips', price: 2}, 
      {name: 'Avocado', price: 1}
    ];

    removeItem(itemsArray, 0);

    expect(itemsArray).not.toContain({name: 'Beans', price: 3})
  });

  test("remove items from array", () => {
    const itemsArray = [
      {name: 'Beans', price: 3}, 
      {name: 'Chips', price: 2}, 
      {name: 'Avocado', price: 1}
    ];

    removeItem(itemsArray, 2);

    expect(itemsArray).not.toContain({name: 'Avocado', price: 1})
  });

  test("remove items from array", () => {
    const itemsArray = [
      {name: 'Beans', price: 3}, 
      {name: 'Chips', price: 2}, 
      {name: 'Avocado', price: 1}
    ];

    removeItem(itemsArray, 1);

    expect(itemsArray).not.toContain({name: 'Chips', price: 2})
  });

  test("remove items from array", () => {
    const itemsArray = [
      {name: 'Beans', price: 3}, 
    ];

    removeItem(itemsArray, 0);

    expect(itemsArray).not.toContain({name: 'Beans', price: 3})
  });
});