// const s = "a1c1e1";
const s = "a1b2c3d4e";

var replaceDigits = function (s) {
    let result = []
    for (let i = 0; i < s.length; i++) {
        if (i % 2 !== 0) {
            result.push(String.fromCodePoint(s[i - 1].charCodeAt(0) + Number(s[i])))
        } else {
            result.push(s[i])
        }
    }
    return result.join('')
};

console.log(replaceDigits(s));