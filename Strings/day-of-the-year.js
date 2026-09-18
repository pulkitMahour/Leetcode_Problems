date = "2019-01-09"
// date = "2019-02-10"


var dayOfYear = function (date) {
    let year = Number(date.slice(0, 4))
    let month = Number(date.slice(5, 7))
    let day = Number(date.slice(8, 10))
    const daysInFebruary = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28;

    let monthObject = { 1: 31, 2: daysInFebruary, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 }

    let count = 0

    for (let i = 1; i < month; i++) {
        count += monthObject[i]
    }

    return (count + day)

};

console.log(dayOfYear(date));