// word = "aabbccddeeffgghhiiiiii";
// word = "xyzxyzxyzxyz";
// word = "abcde";
word = "cwokgnhaet"

var minimumPushes = function(word) {
    cost = 0;
    keyLoop = 1;
    max_count = {};
    for (let i of word) {
        max_count[i] = (max_count[i] || 0) + 1;
    }
    let sortedLetters = Object.keys(max_count).sort((a, b) => max_count[b] - max_count[a]);

    while (sortedLetters.length > 0) {
        for (let j = 0; j < 8; j++) {
            if (sortedLetters.length > 0) {
                let letter = sortedLetters.shift();
                cost += keyLoop * max_count[letter];
            } else { break }
        }
        keyLoop++
    }

    return cost
};

console.log(minimumPushes(word));

// optimized approach
// var minimumPushes = function(word) {
//     let cost = 0;
//     let max_count = {};
//     for (let i of word) {
//         max_count[i] = (max_count[i] || 0) + 1;
//     }
    
//     let sortedLetters = Object.keys(max_count).sort((a, b) => max_count[b] - max_count[a]);

//     // Loop through the sorted letters using their index
//     for (let i = 0; i < sortedLetters.length; i++) {
//         // Math.floor(i / 8) + 1 gives us 1 for indices 0-7, 2 for indices 8-15, etc.
//         let keyLoop = Math.floor(i / 8) + 1;
//         cost += keyLoop * max_count[sortedLetters[i]];
//     }

//     return cost;
// };