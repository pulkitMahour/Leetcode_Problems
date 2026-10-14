// text = "  this   is  a sentence "
text = " practice   makes   perfect"


var reorderSpaces = function (text) {
    let wordsArray = []
    let spaces = 0
    let word = ''

    for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
            spaces++
            if (word) {
                wordsArray.push(word)
                word = ''
            }
        } else {
            word += text[i]
        }
    }

    if (word) {
        wordsArray.push(word)
        word = ''
    }

    let equalSpaces = wordsArray.length > 1 ? Math.floor(spaces / (wordsArray.length - 1)) : 0;
    let extraSpaces = wordsArray.length > 1 ? spaces % (wordsArray.length - 1) : spaces;

    return wordsArray.join(' '.repeat(equalSpaces)) + ' '.repeat(extraSpaces)
};

// refactored version
// var reorderSpaces = function (text) {
//     let words = text.split(' ').filter(word => word.length > 0);
    
//     let totalChars = words.join('').length;
//     let spaces = text.length - totalChars;
    
//     let gaps = words.length - 1;
//     let equalSpaces = gaps > 0 ? Math.floor(spaces / gaps) : 0;
//     let extraSpaces = gaps > 0 ? spaces % gaps : spaces;
    
//     return words.join(' '.repeat(equalSpaces)) + ' '.repeat(extraSpaces);
// };

console.log(reorderSpaces(text));
