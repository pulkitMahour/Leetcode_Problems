// s = "abcd", goal = "cbad"
// s = "ab", goal = "ba"
// s = "ab", goal = "ab"
s = "aa", goal = "aa"

// var buddyStrings = function (s, goal) {
//     let updatedStr = ''
//     for (let i=0; i < s.length; i++) {
//         for (let j = i + 1; j < s.length; j++) {
//             updatedStr = s.slice(0, i) + s[j] + s.slice(i + 1);
//             updatedStr = updatedStr.slice(0, j) + s[i] + updatedStr.slice(j + 1)
//             if (updatedStr === goal){
//                 return true
//             }
//         }
//     }
//     return false
// };

function buddyStrings(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    if (s === goal) {
        return new Set(s).size < s.length;
    }

    let diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    return diff.length === 2 && 
           s[diff[0]] === goal[diff[1]] && 
           s[diff[1]] === goal[diff[0]];
}

console.log(buddyStrings(s, goal));