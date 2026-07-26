// let nums: ArrayConstructor
// let nums = [1,2,3]
// nums = [1, 2, 3, 4]
// nums = [-1,-2,-3]
nums = [-10, -10, 1, 2, 3]

var maximumProduct = function (nums) {
    let max1 = -1001
    let max2 = -1001
    let max3 = -1001
    let min1 = 1001
    let min2 = 1001
    let i = 0
    while (i < nums.length) {
        let number = nums[i]
        if (number > max1) {
            max3 = max2
            max2 = max1
            max1 = number
        } else if (number >= max2) {
            max3 = max2
            max2 = number
        } else if (number >= max3) {
            max3 = number
        }

        if (number < min1) {
            min2 = min1
            min1 = number
        } else if (number < min2) {
            min2 = number
        }
        i++
    }

    return (max1 * max2 * max3) > (min1 * min2 * max1) ? (max1 * max2 * max3) : (min1 * min2 * max1)
};


console.log(maximumProduct(nums));