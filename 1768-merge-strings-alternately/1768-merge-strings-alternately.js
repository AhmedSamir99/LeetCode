/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let maximumLength = word1.length > word2.length ? word1.length : word2.length;
  //   console.log(maximumLength);
  let length1 = word1.length;
  let length2 = word2.length;
  let result = "";
  for (let i = 0; i < maximumLength; i++) {
    if (length1) {
      result += word1[i];
      length1--;
    }
    if (length2) {
      result += word2[i];
      length2--;
    }
  }
  return result;
};