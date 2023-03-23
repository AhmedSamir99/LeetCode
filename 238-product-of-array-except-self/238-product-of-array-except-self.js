/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
  let leftSize = [];
  let righSize = [];
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (leftSize.length == 0) {
      leftSize.push(1);
    } else {
      leftSize.push(leftSize[i - 1] * nums[i - 1]);
    }
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    if (righSize.length == 0) {
      righSize.unshift(1);
    } else {
      righSize.unshift(righSize[0] * nums[i + 1]);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    result.push(righSize[i] * leftSize[i]);
  }

  return result;
}