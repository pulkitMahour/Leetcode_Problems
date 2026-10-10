// s = "leEeetcode"
s = "abBAcC"
// s = "s"

var makeGood = function (s) {
    let i = 0
    while (i < s.length - 1) {
        let c1 = s[i]
        let c2 = s[i + 1]
        if (c1 !== c2 && c1.toLowerCase() === c2.toLowerCase()) {
            s = s.slice(0, i) + s.slice(i + 2)
            i = i > 0 ? (i - 1) : 0
        } else {
            i++
        }
    }
    return s
};

console.log(makeGood(s));