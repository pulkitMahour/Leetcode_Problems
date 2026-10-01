s = "a0b1c2"
// s = "leetcode"
// s = "1229857369"

var reformat = function (s) {
    let letters = [];
    let numbers = [];
    let result = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122) {
            letters.push(s[i]);
        } else {
            numbers.push(s[i]);
        }
    }

    let difference = Math.abs(letters.length - numbers.length);
    if (difference > 1) {
        return '';
    }

    let first = letters.length >= numbers.length ? letters : numbers;
    let second = letters.length >= numbers.length ? numbers : letters;

    for (let i = 0; i < first.length; i++) {
        result.push(first[i]);
        if (i < second.length) {
            result.push(second[i]);
        }
    }

    return result.join('');
};

console.log(reformat(s));