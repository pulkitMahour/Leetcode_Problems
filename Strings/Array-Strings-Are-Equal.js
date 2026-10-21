// word1 = ["ab", "c"], word2 = ["a", "bc"]
// word1 = ["a", "cb"], word2 = ["ab", "c"]
word1 = ["abc", "d", "defg"], word2 = ["abcddefg"]

var arrayStringsAreEqual = function (word1, word2) {
    return word1.join('') === word2.join('');
};

console.log(arrayStringsAreEqual(word1, word2));