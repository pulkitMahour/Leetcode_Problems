sentence = "i love eating burger", searchWord = "burg"
// sentence = "this problem is an easy problem", searchWord = "pro"
// sentence = "i am tired", searchWord = "you"

var isPrefixOfWord = function (sentence, searchWord) {
    let words = sentence.split(' ')
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1
        }
    }
    return -1
};


console.log(isPrefixOfWord(sentence, searchWord))