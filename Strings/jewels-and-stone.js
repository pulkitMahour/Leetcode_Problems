// jewels = "aA", stones = "aAAbbbb"
jewels = "z", stones = "ZZ"


var numJewelsInStones = function (jewels, stones) {
    let i = 0
    let output = 0
    while (i < jewels.length) {
        for (j in stones) {
            if (jewels[i] === stones[j]) {
                console.log(jewels[i], stones[j]);
                output++
            }
        }
        i++
    }
    return output
};

console.log(numJewelsInStones(jewels, stones));

// Optimized version
// var numJewelsInStones = function (jewels, stones) {

//     let count = 0;

//     for (let i = 0; i < stones.length; i++) {
//         if (jewels.includes(stones[i])) {
//             count = count + 1
//         }
//     }

//     return count
// };