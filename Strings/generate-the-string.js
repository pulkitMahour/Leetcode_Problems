// n = 4;
// n = 2;
n = 7;

var generateTheString = function (n) {
    if (n % 2 !== 0) {
        return 'a'.repeat(n);
    } else {
        return `${'a'.repeat(n - 1)}b`
    }
};

console.log(generateTheString(n));