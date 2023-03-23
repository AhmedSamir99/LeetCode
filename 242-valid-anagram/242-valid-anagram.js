/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let countS = new Map();

  if (s.length != t.length) {
    return false;
  } else {
    for (let i in s) {
      countS.set(s[i], (countS.get(s[i]) | 0) + 1);
    }

    for (let currentCharacter of t) {
      if (countS.has(currentCharacter)) {
        let characterCount = countS.get(currentCharacter);

        if (characterCount == 1) {
          countS.delete(currentCharacter);
        } else {
          countS.set(currentCharacter, characterCount-1);
        }
      } else {
        return false;
      }
    }
  }

  return countS.size === 0;
};