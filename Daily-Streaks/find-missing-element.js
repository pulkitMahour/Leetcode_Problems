// nums = [1,4,2,5]
// nums = [7,8,6,9]
nums = [5,1]

var findMissingElements = function(nums) {
    let max = Math.max(...nums)
    let min = Math.min(...nums)
    let answer = []

    for (let i = min; i <= max; i++){
        if (!nums.includes(i)){
            answer.push(i)
        }
    }
    return answer
};

console.log(findMissingElements(nums));