// s1 = "bank", s2 = "kanb"
// s1 = "attack", s2 = "defend"
s1 = "kelb", s2 = "kelb"

var areAlmostEqual = function (s1, s2) {
    let diff = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
        }
    }

    if (diff.length === 0) return true;

    if (diff.length === 2) {
        const [i, j] = diff;
        return s1[i] === s2[j] && s1[j] === s2[i];
    }

    return false;
};

console.log(areAlmostEqual(s1, s2));