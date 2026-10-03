// paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
// paths = [["B","C"],["D","B"],["C","A"]]
paths = [["A","Z"]]

// var destCity = function(paths) {
//     let second = paths[0][1]

//     if (paths.length > 1){
//         let i = 1
//         while (i < paths.length){
//             let j = 1
//             while (j < paths.length) {
//                 if (paths[j][0] === second) {
//                     second = paths[j][1]
//                     j = 1
//                     break
//                 } else {
//                     j++
//                 }
//             }
//             i++
//         }
//     }
//     return second
// };

var destCity = function (paths) {
    const startingCities = new Set();

    for (let i = 0; i < paths.length; i++) {
        startingCities.add(paths[i][0]);
    }

    for (let i = 0; i < paths.length; i++) {
        let destination = paths[i][1];
        if (!startingCities.has(destination)) {
            return destination;
        }
    }
};

console.log(destCity(paths));