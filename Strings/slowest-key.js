// releaseTimes = [9,29,49,50], keysPressed = "cbcd"
releaseTimes = [12,23,36,46,62], keysPressed = "spuda"

var slowestKey = function(releaseTimes, keysPressed) {
    let bestKey = keysPressed[0]
    let maxDuration = releaseTimes[0]

    for (let i = 1; i < releaseTimes.length; i++) {
        let distance = releaseTimes[i] - releaseTimes[i - 1]
        if (distance >= maxDuration){
            if(distance === maxDuration){
                if (keysPressed[i] > bestKey){
                    maxDuration = distance
                    bestKey = keysPressed[i];
                } else {
                    continue
                }
            }
            maxDuration = distance
            bestKey = keysPressed[i];
        }
    }

    return bestKey
};

// var slowestKey = function(releaseTimes, keysPressed) {
//     let maxDuration = releaseTimes[0];
//     let bestKey = keysPressed[0];

//     for (let i = 1; i < releaseTimes.length; i++) {
//         let duration = releaseTimes[i] - releaseTimes[i - 1];

//         if (duration > maxDuration || (duration === maxDuration && keysPressed[i] > bestKey)) {
//             maxDuration = duration;
//             bestKey = keysPressed[i];
//         }
//     }

//     return bestKey;
// };

console.log(slowestKey(releaseTimes, keysPressed));