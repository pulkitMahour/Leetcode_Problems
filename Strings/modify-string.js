// s = "?zs"
s = "ubv?w"

var modifyString = function (s) {
    let words = 'abcdefghijklmnopqrstuvwxyz'
    let result = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '?') {
            for (let j = 0; j < words.length; j++) {
                if (i === 0) {
                    if (s[i+1] !== words[j]){
                        result += words[j]
                        break
                    }
                } else if (i === (s.length - 1)) {
                    if (result[i-1] !== words[j]){
                        result += words[j]
                        break
                    }
                } else {
                    if (s[i+1] !== words[j] && result[i-1] !== words[j]){
                        result += words[j]
                        break
                    }
                }
            }
        } else {
            result += s[i]
        }
    }
    return result
};

// var modifyString = function (s) {
//     let result = s.split('');
//     let options = ['a', 'b', 'c'];

//     for (let i = 0; i < result.length; i++) {
//         if (result[i] === '?') {
//             for (let char of options) {
//                 if (char !== result[i - 1] && char !== result[i + 1]) {
//                     result[i] = char;
//                     break;
//                 }
//             }
//         }
//     }

//     return result.join('');
// };
console.log(modifyString(s));