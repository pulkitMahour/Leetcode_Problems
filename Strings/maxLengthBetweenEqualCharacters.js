// s = "aa"
// s = "abca"
s = "cbzxy"

var maxLengthBetweenEqualCharacters = function(s) {
    let letters = {}
    let maxDistance = -1

    for (let i = 0; i < s.length; i++) {
        if (s[i] in letters){
            let distance = i - letters[s[i]] - 1
            maxDistance = Math.max(distance, maxDistance)
        } else {
            letters[s[i]] = i
        }
    }

    return maxDistance
};

console.log(maxLengthBetweenEqualCharacters(s));