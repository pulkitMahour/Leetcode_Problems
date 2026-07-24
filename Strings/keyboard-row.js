
// words = ["Hello","Alaska","Dad","Peace"]
// words = ["omk"]
words = ["adsdf","sfd"]


var findWords = function(words) {
    let first = "qwertyuiop";
    let second = "asdfghjkl";
    let third = "zxcvbnm";
    let matcher = ''
    let match = []

    for (const word of words){
        for (const letter of word){
            if (!first.includes(letter.toLowerCase())){
                break
            } else {
                matcher += letter
            }
        }
        if (matcher == word){
            match.push(word)
        }
        matcher = ''

        for (const letter of word){
            if (!second.includes(letter.toLowerCase())){
                break
            } else {
                matcher += letter
            }
        }
        if (matcher == word){
            match.push(word)
        }
        matcher = ''

        for (const letter of word){
            if (!third.includes(letter.toLowerCase())){
                break
            } else {
                matcher += letter
            }
        }
        if (matcher == word){
            match.push(word)
        }
        matcher = ''
    }
    console.log(match);
};


findWords(words)


// Optimized version

var findWords = function(words) {
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    let result = [];

    for (const word of words) {
        for (const row of rows) {
            if ([...word].every(letter => row.includes(letter.toLowerCase()))) {
                result.push(word);
                break; // No need to check other rows
            }
        }
    }
    return result;
};