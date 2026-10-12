// n = 987
// n = 1234567
n = 123456789
// n = 123456
// n = 0

var thousandSeparator = function (n) {
    let stringN = String(n);
    let strLen = stringN.length
    let result = '';
    for (let i = 0; i < strLen; i++) {
        if (i % 3 === 0 && i !== 0) {
            result = stringN[(strLen - 1) - i] + '.' + result
        } else {
            result = stringN[(strLen - 1) - i] + result
        }
    }
    return result
};

console.log(thousandSeparator(n));