// nums = [1, 2, 3, 2, 5]
nums = [3,4,5,1,12,14,13]

var missingInteger = function (nums) {
    let sum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1] + 1) {
            sum += nums[i];
        } else {
            break;
        }
    }

    while (nums.includes(sum)) {
        sum++;
    }
    return sum;
};

console.log(missingInteger(nums));