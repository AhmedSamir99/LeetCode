/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  //   let sentence = s;

  let vowelsInOrder = [];
  let helper;
  for (let i = 0; i < s.length; i++) {
    if (
      s[i] == "a" ||
      s[i] == "e" ||
      s[i] == "i" ||
      s[i] == "o" ||
      s[i] == "u" ||
      s[i] == "A" ||
      s[i] == "E" ||
      s[i] == "I" ||
      s[i] == "O" ||
      s[i] == "U"
    ) {
      vowelsInOrder.push(i);
    }
  }
  let strArr = s.split("");
  for (
    let i = 0, j = vowelsInOrder.length - 1;
    i < vowelsInOrder.length - 1, j >= 0, i < j;
    i++, j--
  ) {
    // console.log(vowelsInOrder);

    helper = strArr[vowelsInOrder[i]];
    strArr[vowelsInOrder[i]] = strArr[vowelsInOrder[j]];
    strArr[vowelsInOrder[j]] = helper;
    console.log(strArr);
  }
  return strArr.join("");
};

