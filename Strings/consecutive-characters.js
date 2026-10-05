// s = "leetcode"
s = "abbcccddddeeeeedcba"

var maxPower = function(s) {
    let current = 1
    let maximum = 0

    for (let i = 0; i < s.length; i++) {
        if (i+1 < s.length && s[i] === s[i+1]){
            current++
        } else {
            maximum = current > maximum ? current : maximum
            current = 1
        }
    }

    return maximum
};

console.log(maxPower(s));