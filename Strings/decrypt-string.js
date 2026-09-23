// s = "10#11#12"
s = "1326#"

var freqAlphabets = function (s) {
    let answer = ''
    let i = 0
    while (i < s.length) {
        if (s[i + 2] == '#') {
            let num = Number(s.slice(i, i + 2))
            answer += String.fromCharCode(96 + num);
            i += 3
        } else {
            let char = Number(s[i])
            answer += String.fromCharCode(96 + char);
            i++
        }
    }
    return answer
};

console.log(freqAlphabets(s));