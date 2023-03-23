/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  let primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,101
  ];
  for (let i of strs) {
    let key = i.split("").reduce((accumulater, currentValue) => {
      return accumulater * primes[currentValue.charCodeAt() - 97];
    }, 1);
    
    if (!map.has(key)) {
      map.set(key, [i]);
    } else {
      map.get(key).push(i);
    }
  }
  //   console.log(...map.values());
  return [...map.values()];
};
