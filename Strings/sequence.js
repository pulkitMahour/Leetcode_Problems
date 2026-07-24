// low = 10, high = 500
low = 1000, high = 13000

var sequentialDigits = function (low, high) {
    let result = []

    for (let start = 1; start < 10; start++) {
        let num = start
        let last_digit = start
        while (num <= high && last_digit < 9) {
            last_digit++
            console.log(num, last_digit);
            num = num * 10 + (last_digit)

            if (num >= low && num <= high) {
                result.push(num)
            }
        }
        console.log('\b');
    }
    console.log(result.sort((a, b) => a-b));
};


sequentialDigits(low, high)
// console.log(100%10);
