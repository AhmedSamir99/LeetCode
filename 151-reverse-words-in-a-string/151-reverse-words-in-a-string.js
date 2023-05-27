/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let strArr = s.trim().split(" ");
  let reversed = [];
  for (let i = strArr.length - 1; i >= 0; i--) {
    if (!strArr[i] == " ") reversed.push(strArr[i]);
  }
  for (let i = 0; i < reversed.length; i++) {
    if (reversed[i] == " ") reversed.splice(i, 1);
  }

  return reversed.join(" ");
};
