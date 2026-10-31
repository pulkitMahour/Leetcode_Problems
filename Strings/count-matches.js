// items = [["phone", "blue", "pixel"], ["computer", "silver", "lenovo"], ["phone", "gold", "iphone"]], ruleKey = "color", ruleValue = "silver"
items = [["phone", "blue", "pixel"], ["computer", "silver", "phone"], ["phone", "gold", "iphone"]], ruleKey = "type", ruleValue = "phone"

var countMatches = function (items, ruleKey, ruleValue) {
    let itemIndex = { 'type': 0, 'color': 1, 'name': 2 }
    let count = 0

    for (let i = 0; i < items.length; i++) {
        if (items[i][itemIndex[ruleKey]] === ruleValue) {
            count++
        }
    }
    return count
};

console.log(countMatches(items, ruleKey, ruleValue));
