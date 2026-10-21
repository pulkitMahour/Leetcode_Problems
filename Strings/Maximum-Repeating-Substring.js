sequence = "ababc", word = "ab"
// sequence = "ababc", word = "ba"
sequence = "ababc", word = "ac"

var maxRepeating = function (sequence, word) {
    let k = 1
    while (sequence.includes(word.repeat(k))){
        k++
    }
    return k - 1
};

console.log(maxRepeating(sequence, word));