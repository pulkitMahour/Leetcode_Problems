s = "011101"
// s = "00111"
// s = "1111"

var maxScore = function (s) {
    let answer = 0

    for (let i = 0; i < s.length - 1; i++) {
        let left = ''
        let right = ''

        left = s.slice(0, i + 1).replaceAll('1', '');
        right = s.slice(i + 1).replaceAll('0', '');

        let currentScore = left.length + right.length;
        answer = Math.max(answer, currentScore);
    }
    return answer
};

console.log(maxScore(s));