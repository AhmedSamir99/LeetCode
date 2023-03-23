/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  //   let frequencyArray = new Array(nums.length).fill(0);
  let frequencyMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    // !frequencyMap.has(nums[i]) ? frequencyMap.set(nums[i],0) : frequencyMap.get(nums[i])++;

    if (!frequencyMap.has(nums[i])) {
      frequencyMap.set(nums[i], 1);
    } else {
      frequencyMap.set(nums[i], frequencyMap.get(nums[i]) + 1 || 1);
    }
  }

  // sort the Map by values in descending order
  const sortedMap = new Map(
    [...frequencyMap.entries()].sort((a, b) => b[1] - a[1])
  );

  // get the maximum two values
  const maxValues = [...sortedMap.keys()].slice(0, k);

  return maxValues;
  //   return frequencyMap;
};