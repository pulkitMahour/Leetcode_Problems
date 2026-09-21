text = "nlaebolko"
// text = "loonbalxballpoon"
// text = "iris"
// text = "leetcode"

var maxNumberOfBalloons = function (text) {
    let mainObject = { 'b': 0, 'a': 0, 'l': 0, 'o': 0, 'n': 0};

    for (const i of text) {
        if (i in mainObject) {
            mainObject[i] += 1;
        }
    }

    mainObject['l'] = Math.floor(mainObject['l'] / 2);
    mainObject['o'] = Math.floor(mainObject['o'] / 2);

    return Math.min(...Object.values(mainObject))
};

console.log(maxNumberOfBalloons(text));