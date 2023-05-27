/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let result = [];
  let max = 0;
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > max) max = candies[i];
  }

  result = candies.map((element) => {
    // return element + extraCandies > max ? true : false;
    return element + extraCandies >= max ? true : false;
  });
  return result;
};