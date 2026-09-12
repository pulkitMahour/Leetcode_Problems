// s = "abbaca"
s = "azxxzy"

// var removeDuplicates = function (s) {
//     let i = 0;
//     while (i < s.length) {
//         let current = s[i]
//         let next = s[i + 1]
//         if (current == next) {
//             s = s.slice(0, i) + s.slice(i+2)
//             i = 0
//         } else {
//             i++
//         }
//     }
//     return s
// };

// optimized approach
var removeDuplicates = function (s) {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        let current = s[i]
        if(current === stack[stack.length - 1]){
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }

    return stack.join('')
};



console.log(removeDuplicates(s));