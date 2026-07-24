// s = "PPALLP"
// s = "PPALLL"
s = "LALL"
// s = "LLLALL"

var checkRecord = function (s) {
    let absent = 0
    let late = 0
    for (let i of s) {
        if (i == "A") {
            absent++
            if (late < 3){
                late = 0
            }
        } else if (i == "P" && late < 3){
            late = 0
        } else if (i == "L") {
            late++
        }
    console.log(absent, late);
    }
    if (absent < 2 && late < 3) {
        return true
    } else {
        return false
    }
};

console.log(checkRecord(s));