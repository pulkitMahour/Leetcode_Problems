word1 = "abc", word2 = "pqr"
// word1 = "ab", word2 = "pqrs"
// word1 = "abcd", word2 = "pq"

var mergeAlternately = function (word1, word2) {
    let result = ''
    const minLen = Math.min(word1.length, word2.length)

    for (let i = 0; i < minLen; i++) {
        result += word1[i] + word2[i]
    }

    if (word1.length > minLen) {
        result += word1.slice(minLen)
    } else if (word2.length > minLen) {
        result += word2.slice(minLen)
    }

    return result
};

// Optimized approach
// var mergeAlternately = function (word1, word2) {
//     let result = '';
//     const maxLength = Math.max(word1.length, word2.length);

//     for (let i = 0; i < maxLength; i++) {
//         if (word1[i]) result += word1[i];
//         if (word2[i]) result += word2[i];
//     }

//     return result;
// };

console.log(mergeAlternately(word1, word2));