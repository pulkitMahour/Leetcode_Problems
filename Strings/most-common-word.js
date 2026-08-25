paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// paragraph = "a.", banned = []
// paragraph = "a b.b", banned = []

var mostCommonWord = function (paragraph, banned) {
    const words = paragraph.replaceAll(",", " ").replaceAll(".", " ").replaceAll("!", " ").replaceAll("?", " ").replaceAll("'", " ").replaceAll(";", " ").split(" ").filter(word => word !== "");

    const counts = {};
    for (const char of words) {
        if (!banned.includes(char.toLowerCase())) {
            counts[char.toLowerCase()] = (counts[char.toLowerCase()] || 0) + 1;
        }
    }

    const highestKey = Object.keys(counts).reduce((a, b) =>
        counts[a] > counts[b] ? a : b
    );
    return highestKey
};

console.log(mostCommonWord(paragraph, banned));


// we can use set in the loop, instead of includes method. It will be fast slightly.
// const bannedSet = new Set(banned)
//     const counts = {};
//     for (const char of words) {
//         if (!bannedSet.has(char.toLowerCase())) {
//             counts[char.toLowerCase()] = (counts[char.toLowerCase()] || 0) + 1;
//         }
//     }