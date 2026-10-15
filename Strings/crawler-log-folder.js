logs = ["d1/", "d2/", "../", "d21/", "./"]
// logs = ["d1/","d2/","./","d3/","../","d31/"]
// logs = ["d1/","../","../","../"]

var minOperations = function (logs) {
    let result = 0
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../') {
            if (result > 0) {
                result--;
            } else { continue }
        } else if (logs[i] === './') {
            continue;
        } else {
            result++
        }
    }
    return result
};

console.log(minOperations(logs));