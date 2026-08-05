// this is the wrong solution, have to use the recursive approach.

// nums = [1,5,2]
nums = [1,5,233,7]

var predictTheWinner = function(nums) {
    let one_turn = true;
    let one = 0;
    let two = 0;
    while (nums.length > 0){
        if (one_turn){
            if (nums[0] > nums[nums.length - 1]){
                one += nums[0];
                nums.shift()
            } else {
                one += nums[nums.length -1];
                nums.pop();
            }
            one_turn = false
        } else {
            if (nums[0] > nums[nums.length - 1]){
                two += nums[0];
                nums.shift()
            } else {
                two += nums[nums.length -1];
                nums.pop();
            }
            one_turn = true
        }
    }

    if (one >= two) {
        return true
    } else {
        return false
    }
    // return `one: ${one} , two: ${two}`
};

console.log(predictTheWinner(nums));