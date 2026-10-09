// s = "codeleet", indices = [4,5,6,7,0,2,1,3]
s = "abc", indices = [0, 1, 2]

// var restoreString = function(s, indices) {
//     let answer = ''
//     for (let i = 0; i < s.length; i++) {
//         answer += s[indices.indexOf(i)]
//     }
//     return answer
// };

var restoreString = function (s, indices) {
    let answer = new Array(s.length);

    for (let i = 0; i < s.length; i++) {
        answer[indices[i]] = s[i];
    }

    return answer.join('');
};

console.log(restoreString(s, indices));