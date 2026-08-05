// s = "abcde", goal = "cdeab"
// s = "abcde", goal = "abced"
s = "dawhwh", goal = "hdawhw"


var rotateString = function(s, goal) {
    for (let i = 0; i < s.length; i++){
        if (s === goal){
            return true
        } else {
            s = s.slice(1) + s[0];
        }
    };
    return false
};

console.log(rotateString(s, goal));