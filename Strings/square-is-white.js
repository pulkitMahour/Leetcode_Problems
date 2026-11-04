// coordinates = "a1"
// coordinates = "h3"
coordinates = "c7"

var squareIsWhite = function (coordinates) {
    const initial = { a: false, b: true, c: false, d: true, e: false, f: true, g: false, h: true }

    if (Number(coordinates[1]) % 2 === 0) {
        if (initial[coordinates[0]]) {
            return false
        } else if (!initial[coordinates[0]]) {
            return true
        }

    } else {
        return initial[coordinates[0]]
    }
};

// var squareIsWhite = function(coordinates) {
//     return (coordinates.charCodeAt(0) + Number(coordinates[1])) % 2 !== 0;
// };

console.log(squareIsWhite(coordinates));