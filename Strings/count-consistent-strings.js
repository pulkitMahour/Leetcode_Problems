// allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"]
// allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"]
allowed = "cad", words = ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]

var countConsistentStrings = function (allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0

    for (const word of words) {
        let allowedWord = true
        for (const letter of word) {
            if (!allowedSet.has(letter)) {
                allowedWord = false
                break
            }
        }
        if (allowedWord) {
            count++
        }
    }
    return count
};

console.log(countConsistentStrings(allowed, words));