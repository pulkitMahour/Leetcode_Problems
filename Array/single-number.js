// nums = [2,2,1]
nums = [4, 1, 2, 1, 2]

var singleNumber = function (nums) {
    const counts = {};
    for (const number of nums) {
        counts[number] = (counts[number] || 0) + 1;
    }
    console.log(counts, Object.keys(counts))
    answer = Object.keys(counts).filter(number => counts[number] === 1)[0];
    return Number(answer)
};
console.log(singleNumber(nums))
