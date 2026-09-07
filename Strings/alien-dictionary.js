// words = ["hello", "leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
// words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"

var isAlienSorted = function (words, order) {
    let letterIndex = {}
    for (let i = 0; i < order.length; i++) {
        letterIndex[order[i]] = i
    }

    for (let index = 0; index < words.length - 1; index++) {
        let firstWord = words[index]
        let secondWord = words[index + 1]
        let breakVar = false
        for (let i = 0; i < Math.min(firstWord.length, secondWord.length); i++) {
            if (letterIndex[firstWord[i]] > letterIndex[secondWord[i]]) {
                return false
            } else if (letterIndex[firstWord[i]] < letterIndex[secondWord[i]]) {
                breakVar = true
                break
            }
        }

        if (!breakVar && firstWord.length > secondWord.length){
            return false
        }
    }

    return true
};

console.log(isAlienSorted(words, order));

