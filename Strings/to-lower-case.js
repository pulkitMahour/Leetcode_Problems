s = "Hello"
// s = "here"
// s = "LOVELY"

var toLowerCase = function(s) {
    dict = {"A": "a", "B": "b", "C": "c", "D": "d", "E": "e", "F": "f", "G": "g", "H": "h", "I": "i", "J": "j", "K": "k", "L": "l", "M": "m", "N": "n", "O": "o", "P": "p", "Q": "q", "R": "r", "S": "s", "T": "t", "U": "u", "V": "v", "W": "w", "X": "x", "Y": "y", "Z": "z"}
    let newString = ''
    for (let i = 0; i < s.length; i++) {
        if (s[i] in dict){
            newString += dict[s[i]]
        } else {
            newString += s[i]
        }
    }
    return newString
};

console.log(toLowerCase(s));