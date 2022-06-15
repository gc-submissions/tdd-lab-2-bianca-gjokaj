function calculateChange(payment, total) {
    return payment - total;
}

function isSufficientPayment(payment, total) {
    return payment >= total;
}

function calculateTotal(itemsArray) {
    let sum = 0;
    itemsArray.forEach((item) => (sum += item.price));
    return sum;
}

function addItem(itemsArray, name, price) {
    const object = {name: name, price: price};
    itemsArray.push(object);
}

function removeItem(itemsArray, index) {
    itemsArray.splice(index, 0);
}

module.exports = {calculateChange, isSufficientPayment, calculateTotal, addItem, removeItem};
