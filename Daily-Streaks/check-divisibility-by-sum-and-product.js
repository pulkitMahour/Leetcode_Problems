// n = 99
n = 23

// var checkDivisibility = function (n) {
//     let sum = 0;
//     let product = 1;

//     for (const i of String(n)) {
//         sum += Number(i);
//         product = product * Number(i)
//     }
//     if (n % (sum + product) === 0) {
//         return true
//     } else {
//         return false
//     }

// };

var checkDivisibility = function (n) {
    let sum = 0;
    let product = 1;
    let temp = n;

    while (temp > 0) {
        const digit = temp % 10;
        sum += digit;
        product *= digit;
        temp = Math.floor(temp / 10);
    }

    return n % (sum + product) === 0;
};
console.log(checkDivisibility(n));