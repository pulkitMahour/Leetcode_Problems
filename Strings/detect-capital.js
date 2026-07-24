// word = "USA"
// word = "FlaG"
// word = "leetcode"
// word = "Google"
word = 'a'

var detectCapitalUse = function(word) {
    if (word.toUpperCase() == word || word.toLowerCase() == word  || (word[0].toUpperCase()+word.slice(1).toLowerCase()) == word){
        return true
    } 
    return false
};



console.log(detectCapitalUse(word));