// const s = "is2 sentence4 This1 a3";
const s = "Myself2 Me1 I4 and3";

var sortSentence = function(s) {
    let words = s.split(' ');
    let result = [];
    
    for (let word of words) {
        let position = Number(word[word.length - 1]);
        let cleanWord = word.slice(0, -1);
        result[position - 1] = cleanWord;
    }
    
    return result.join(' ');
};

console.log(sortSentence(s))
