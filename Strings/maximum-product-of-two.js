// n = 31
// n = 22
// n = 1234
n = 267
n = 77

var maxProduct = function (n) {
    let max1 = 0
    let max2 = 0
    while (n > 0) {
        let number = n % 10
        if (number > max1) {
            max2 = max1
            max1 = number
        } else if (number >= max2) {
            max2 = number
        }
        n = Math.floor(n / 10)
    }
    return (max1 * max2)

};


console.log(maxProduct(n));