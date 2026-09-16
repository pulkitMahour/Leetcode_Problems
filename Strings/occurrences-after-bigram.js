text = "alice is a good girl she is a good student", first = "a", second = "good"
// text = "we will we will rock you", first = "we", second = "will"
// text = "a a a", first = "a", second = "a"

var findOcurrences = function (text, first, second) {
    let wordArray = text.split(' ')
    let i = 0
    let answer = []

    while (i < wordArray.length - 2) {
        if (wordArray[i] === first && wordArray[i + 1] === second) {
            answer.push(wordArray[i + 2])
        }
        i++
    }

    return answer
};

console.log(findOcurrences(text, first, second));