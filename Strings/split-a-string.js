// s = "RLRRLLRLRL"
// s = "RLRRRLLRLL"
s = "LLLLRRRR"

var balancedStringSplit = function (s) {
    let count = 0;
    let balanced = 0

    for (const i of s) {
        if (i === 'R') {
            count++
        } else {
            count--
        }

        if (count === 0) {
            balanced++
        }
    }
    return balanced
};

console.log(balancedStringSplit(s));