// s = "Hello how are you Contestant", k = 4
// s = "What is the solution to this problem", k = 4
s = "chopper is not a tanuki", k = 5

var truncateSentence = function(s, k) {
    return s.split(' ').slice(0, k).join(' ');
};

console.log(truncateSentence(s, k));