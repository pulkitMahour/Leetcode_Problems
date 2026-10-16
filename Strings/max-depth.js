s = "(1+(2*3)+((8)/4))+1"
// s = "(1)+((2))+(((3)))"
// s = "()(())((()()))"

var maxDepth = function(s) {
    let opening = 0
    let maximum = 0

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '('){
            opening++
            maximum = Math.max(opening, maximum)
        } else if (s[i] === ')'){
            opening--
        }
    }
    return maximum
};

console.log(maxDepth(s));