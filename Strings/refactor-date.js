date = "2th Oct 2052"


var reformatDate = function (date) {
    const months = { "Jan": '01', "Feb": '02', "Mar": '03', "Apr": '04', "May": '05', "Jun": '06', "Jul": '07', "Aug": '08', "Sep": '09', "Oct": '10', "Nov": '11', "Dec": '12' }

    let dateArray = date.split(' ')
    let day = parseInt(dateArray[0], 10)
    
    return `${dateArray[2]}-${months[dateArray[1]]}-${day < 10 ? '0'+day : day}`
};

console.log(reformatDate(date));