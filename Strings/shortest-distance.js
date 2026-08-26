s = "loveleetcode", c = "e"

var shortestToChar = function (s, c) {
    let targetIndices = []
    let result = []
    let p = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            targetIndices.push(i)
        }
    }

    for (let i = 0; i < s.length; i++) {
        let current_e_distance = Math.abs(i - targetIndices[p])
        let next_e_distance = targetIndices[p + 1] !== undefined ? Math.abs(i - targetIndices[p + 1]) : current_e_distance;
        if (current_e_distance <= next_e_distance) {
            result.push(current_e_distance)
        } else {
            p++
            result.push(Math.abs(i - targetIndices[p]))
        }
    }

    return result
};

console.log(shortestToChar(s, c));