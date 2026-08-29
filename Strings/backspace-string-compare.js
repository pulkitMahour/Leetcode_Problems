s = "ab#c", t = "ad#c"
// s = "ab##", t = "c#d#"
// s = "a#c", t = "b"

var backspaceCompare = function(s, t) {
    let new_s = ''
    let new_t = ''
    for (let i of s){
        if (i === '#'){
            new_s = new_s.slice(0, -1);
        } else {
            new_s += i
        }
    }

    for (let j of t){
        if ( j === '#'){
            new_t = new_t.slice(0, -1);
        } else {
            new_t += j
        }
    }
    return new_s === new_t
};

console.log(backspaceCompare(s, t));