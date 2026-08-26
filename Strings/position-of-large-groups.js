s = "abcdddeeeeaabbbcd"
// s = "abbxxxxzzy"
// s = "aaa"

var largeGroupPositions = function (s) {
    let current = 0
    let result = []

    for (let i = 1; i <= s.length; i++) {
        if (s[current] === s[i]) {
            continue
        } else {
            if (((i - 1) - current) >= 2) {
                result.push([current, (i - 1)])
            }
            current = i
        }
    }
    return result
};

console.log(largeGroupPositions(s));