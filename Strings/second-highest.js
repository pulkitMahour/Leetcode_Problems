// s = "dfa12321afd"
s = "abc1111"

var secondHighest = function (s) {
    let first = -1
    let second = -1

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 97 || s.charCodeAt(i) > 122) {
            let d = Number(s[i])
            if (d > first) {
                second = first
                first = d
            } else if (d < first && d > second){
                second = d
            }
        }
    }

    return second
};

console.log(secondHighest(s));