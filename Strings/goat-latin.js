// sentence = "I speak Goat Latin"
// output = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
sentence = "The quick brown fox jumped over the lazy dog"
output = "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"


var toGoatLatin = function (sentence) {
    let words = sentence.split(' ')
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < words.length; i++) {
        if (!vowels.includes(words[i][0].toLowerCase())){
            words[i] = words[i].slice(1) + words[i][0] + 'ma' + 'a'.repeat(i+1)
        } else {
            words[i] = words[i] + 'ma' + 'a'.repeat(i+1)
        }
    }
    return words.join(' ')
};

console.log(toGoatLatin(sentence));