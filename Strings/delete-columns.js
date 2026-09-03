strs = ["cba","daf","ghi"]
// strs = ["a","b"]
// strs = ["zyx","wvu","tsr"]

var minDeletionSize = function(strs) {
    let counter = {}
    for (let i in strs[0]){
        counter[i] = strs[0][i].charCodeAt()
    }

    for (let j = 1; j < strs.length; j++) {
        for (let k = 0; k < strs[j].length; k++){
            let code = strs[j][k].charCodeAt()
            if (!counter[k]) {
                continue
            } else if (code >= counter[k]){
                counter[k] = code
            } else {
                delete counter[k]
            }
        }
    }

    return (strs[0].length - Object.keys(counter).length)
};

console.log(minDeletionSize(strs));