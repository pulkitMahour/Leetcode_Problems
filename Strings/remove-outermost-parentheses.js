// s = "(()())(())(()(()))"
s = "(()())(())"
// s = "()()"

// var removeOuterParentheses = function (s) {
//     let start = 0
//     let end = 0
//     let group = ''
//     let arrayOfGroups = []
//     let answer = ''

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == '(') {
//             start += 1
//         } else if (s[i] == ')') {
//             end += 1
//         }

//         group += s[i]
//         if (start === end && start > 0) {
//             start = 0
//             end = 0
//             arrayOfGroups.push(group)
//             group = ''
//         }
//     }

//     for (let i = 0; i < arrayOfGroups.length; i++) {
//         answer += arrayOfGroups[i].slice(1, arrayOfGroups[i].length - 1)
//     }

//     return answer
// };

// optimized approach
var removeOuterParentheses = function (s) {
    let answer = '';
    let opened = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            if (opened > 0) {
                answer += s[i];
            }
            opened++;
        } else if (s[i] === ')') {
            opened--;
            if (opened > 0) {
                answer += s[i];
            }
        }
    }

    return answer;
};


console.log(removeOuterParentheses(s));