// path = "NES"
path = "NESWW"

var isPathCrossing = function(path) {
    let coordinates = [0, 0];
    const pair = new Set(['0,0']);

    for (const i of path) {
        if (i === 'N'){
            coordinates[1] += 1
        } else if (i === 'S'){
            coordinates[1] -= 1
        } else if (i === 'E'){
            coordinates[0] += 1
        } else if (i === 'W'){
            coordinates[0] -= 1
        }

        if (pair.has(`${coordinates[0]},${coordinates[1]}`)){
            return true
        } else {
            pair.add(`${coordinates[0]},${coordinates[1]}`)
        }
    }

    return false
};

console.log(isPathCrossing(path));