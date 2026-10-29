// time = "2?:?0"
// time = "0?:3?"
time = "1?:22"

var maximumTime = function (time) {
    let result = time.split('')

    if (result[0] === '?' && result[1] === '?') {
        result[0] = '2'
        result[1] = '3'
    } else if (result[0] === '?') {
        if (result[1] <= 3) {
            result[0] = 2
        } else {
            result[0] = 1
        }
    } else if (result[1] === '?') {
        if (result[0] < 2) {
            result[1] = 9
        } else {
            result[1] = 3
        }
    }

    if (result[3] === '?') {
        result[3] = '5'
    }

    if (result[4] === '?') {
        result[4] = '9'
    }

    return result.join('')
};

console.log(maximumTime(time));