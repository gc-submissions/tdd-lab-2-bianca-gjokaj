function formatCurrency(amount) {
    if (amount >= 0) {
        return `$${amount.toFixed(2)}`
    } else {
        amount *= -1;
        return `-$${amount.toFixed(2)}`
    }
};

function getCoins(cents) {
    let quarters = 0;
    let nickels = 0;
    let dimes = 0;
    let pennies = 0;

    while(cents > 0) {
        if (cents >= 25) {
            quarters++;
            cents -= 25;
        } else if (cents >= 5 && cents < 10) {
            nickels++;
            cents -= 5;
        } else if (cents >= 10 && cents < 25) {
            dimes++;
            cents -= 10;
        } else if (cents >= 1 && cents < 4) {
            pennies++;
            cents -= 1;
        };
    };
    return {quarters: quarters, nickels: nickels, dimes: dimes, pennies: pennies};
};

module.exports = {formatCurrency, getCoins};