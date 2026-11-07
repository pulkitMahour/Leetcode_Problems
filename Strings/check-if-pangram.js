sentence = "thequickbrownfoxjumpsoverthelazydog"
// sentence = "leetcode"

var checkIfPangram = function(sentence) {
    // let pangram = new Set()
    // for (let i = 0; i < sentence.length; i++) {
    //     pangram.add(sentence[i])
    // }

    // return pangram.size === 26
    return new Set(sentence).size === 26;
};

console.log(checkIfPangram(sentence));