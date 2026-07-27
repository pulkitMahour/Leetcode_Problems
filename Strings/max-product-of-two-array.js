// nums = [3,4,5,2]
// nums = [1,5,4,5]
nums = [3, 7]

var maxProduct = function (nums) {
    let max1 = 0
    let max2 = 0
    let i = 0
    while (i < nums.length) {
        let number = nums[i]
        if (number > max1) {
            max2 = max1
            max1 = number
        } else if (number >= max2) {
            max2 = number
        }
        i++
    }
    // console.log(max1, max2);
    return (max1 - 1) * (max2 - 1)
};


console.log(maxProduct(nums));