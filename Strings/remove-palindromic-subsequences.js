// s = "ababa"
// s = "abb"
s = "baabb"

var removePalindromeSub = function (s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right){
        if (s[left] === s[right]){
            left++
            right--
        } else {
            return 2
        }
    }
    return 1
};

console.log(removePalindromeSub(s));