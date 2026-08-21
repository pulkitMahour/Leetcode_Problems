// licensePlate = "1s3 PSt", words = ["step","steps","stripe","stepple"]
licensePlate = "1s3 456", words = ["looks","pest","stew","show"]

function shortestCompletingWord(licensePlate, words) {
    const counts = {};
    for (let i = 0; i < licensePlate.length; i++) {
        const char = licensePlate[i].toLowerCase();
        if (char >= 'a' && char <= 'z') {
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    let shortestWord = null;

    for (const word of words) {
        const tempObj = {};
        for (const char of word) {
            tempObj[char] = (tempObj[char] || 0) + 1;
        }

        const targetKeys = Object.keys(counts);
        const isMatch = targetKeys.filter(char => tempObj[char] >= counts[char]).length === targetKeys.length;

        if (isMatch) {
            if (shortestWord === null || word.length < shortestWord.length) {
                shortestWord = word;
            }
        }
    }

    return shortestWord;
}

console.log(shortestCompletingWord(licensePlate, words));