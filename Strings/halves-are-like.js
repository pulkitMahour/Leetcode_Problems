// s = "book"
s = "textbook"

var halvesAreAlike = function (s) {
    let count = 0
    let vowelSet = new Set("aeiouAEIOU");
    const half = Math.ceil(s.length / 2);

    for (let i = 0; i < s.length; i++) {
        if (vowelSet.has(s[i])) {
            if (i < half) {
                count++
            } else {
                count--
            }
        }
    }

    return count === 0
};

console.log(halvesAreAlike(s));