// words = ["bella", "label", "roller"]
words = ["cool","lock","cook"]

var commonChars = function (words) {
    minCount = {};
    for (let i = 0; i < words[0].length; i++) {
        minCount[words[0][i]] = (minCount[words[0][i]] || 0) + 1
    }

    for (let i = 0; i < words.length; i++) {
        letterCount = {};
        for (let j = 0; j < words[i].length; j++) {
            let letter = words[i][j]
            letterCount[letter] = (letterCount[letter] || 0) + 1
        }

        for (let char in minCount) {
            if (letterCount[char]) {
                minCount[char] = Math.min(minCount[char], letterCount[char]);
            } else {
                minCount[char] = 0;
            }
        }
    }

    let results = [];
    for (let i in minCount){
        while (minCount[i] > 0){
            results.push(i)
            minCount[i]--;
        }
    }

    return results
};

console.log(commonChars(words));