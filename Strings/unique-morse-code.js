words = ["gin", "zen", "gig", "msg"]
// words = ["a"]


// var uniqueMorseRepresentations = function (words) {
//     const morseCode = {
//         "a": ".-", "b": "-...", "c": "-.-.", "d": "-..",
//         "e": ".", "f": "..-.", "g": "--.", "h": "....",
//         "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
//         "m": "--", "n": "-.", "o": "---", "p": ".--.",
//         "q": "--.-", "r": ".-.", "s": "...", "t": "-",
//         "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
//         "y": "-.--", "z": "--..",
//     };
//     const answer = []
//     let temp_word = "";

//     for (let word of words) {
//         for (let letter of word) {
//             temp_word += morseCode[letter]
//         }
//         if (!answer.includes(temp_word)) {
//             answer.push(temp_word)
//         }
//         temp_word = ""
//     }

//     return answer.length
// };

var uniqueMorseRepresentations = function (words) {
    const morseCode = {
        "a": ".-", "b": "-...", "c": "-.-.", "d": "-..",
        "e": ".", "f": "..-.", "g": "--.", "h": "....",
        "i": "..", "j": ".---", "k": "-.-", "l": ".-..",
        "m": "--", "n": "-.", "o": "---", "p": ".--.",
        "q": "--.-", "r": ".-.", "s": "...", "t": "-",
        "u": "..-", "v": "...-", "w": ".--", "x": "-..-",
        "y": "-.--", "z": "--..",
    };
    const answer = new Set();
    let temp_word = "";

    for (let word of words) {
        for (let letter of word) {
            temp_word += morseCode[letter]
        }
        answer.add(temp_word)
        temp_word = ""
    }
    return answer.size
};

console.log(uniqueMorseRepresentations(words));