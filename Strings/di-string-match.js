s = "IDID"


var diStringMatch = function (s) {
    let answer = []

    let minimum = 0
    let maximum = s.length

    for (let j of s){
        if (j === 'I'){
            answer.push(minimum)
            minimum++
        } else if (j === 'D') {
            answer.push(maximum)
            maximum--
        }
    }
    answer.push(minimum)
    return answer
};

console.log(diStringMatch(s));