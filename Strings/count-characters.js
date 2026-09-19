// words = ["cat", "bt", "hat", "tree"], chars = "atach"
words = ["hello","world","leetcode"], chars = "welldonehoneyr"

var countCharacters = function (words, chars) {
    let mainObject = {}
    let count = 0
    for (const element of chars) {
        mainObject[element] = (mainObject[element] || 0) + 1;
    }

    for (const i of words) {
        let tempObject = {}
        for (const j of i) {
            tempObject[j] = (tempObject[j] || 0) + 1;
        }

        let tempCount = 0
        for (const key of Object.keys(tempObject)){
            if (mainObject[key] >= tempObject[key] && tempObject[key] != 0){
                tempCount += tempObject[key]
            } else {
                tempCount = 0
                break
            }
        }
        count += tempCount
    }
    return count
};


console.log(countCharacters(words, chars));