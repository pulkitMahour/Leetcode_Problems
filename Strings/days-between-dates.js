date1 = "2019-06-29", date2 = "2018-06-30"

var daysBetweenDates = function (date1, date2) {
    const getDays = (date) => {
        const year = Number(date.slice(0, 4));
        const month = Number(date.slice(5, 7));
        const day = Number(date.slice(8, 10));

        let totalDays = 0;

        for (let y = 1970; y < year; y++) {
            const isLeap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
            totalDays += isLeap ? 366 : 365;
        }

        const daysInFebruary = ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) ? 29 : 28;
        const daysInMonths = [0, 31, daysInFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        for (let m = 1; m < month; m++) {
            totalDays += daysInMonths[m];
        }

        totalDays += day;

        return totalDays;
    };

    return Math.abs(getDays(date1) - getDays(date2));
};

console.log(daysBetweenDates(date1, date2));