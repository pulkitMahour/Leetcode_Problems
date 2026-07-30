// word = "xycdefghij"
word = "abcde";

var minimumPushes = function (word) {
    let i = 1;
    let cost = 0;
    let copy = word;
    while (word) {
        for (let j = 0; j < 8; j++) {
            if (copy) {
                cost += i;
                copy = word.slice(j + 1)
            } else { break }
        }
        word = copy;
        copy = word;
        i++;
    }
    return cost;
};

console.log(minimumPushes(word));