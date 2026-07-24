// moves = "UD"
// moves = "LL"
moves = "URDDLLUUURDD"

var judgeCircle = function (moves) {
    let x = 0;
    let y = 0;
    for (let i of moves) {
        if (i === "U") {
            x++
        } else if (i === "D") {
            x--
        } else if (i === "R") {
            y++
        } else if (i === "L") {
            y--
        }
    }
    console.log(x === 0 && y === 0);
};


judgeCircle(moves)
