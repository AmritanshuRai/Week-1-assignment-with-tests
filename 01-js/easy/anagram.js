/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// .has lookup of O(1)
function isAnagramSecoundApproach(str1, str2) {
  const str1Set = new Set([...str1.toLowerCase()]);
  return [...str2].every((char) => str1Set.has(char.toLowerCase()));
}

const isAnagramThirdApproach = (str1, str2) =>
  [...str1.toLowerCase()].sort().join('') ==
  [...str2.toLowerCase()].sort().join('');

// you can add any method to native contructors but it's NOT recommended aur gaali khaoge apne seniors se
String.prototype.kashHarCheezSortKarnaItnaEasyHota = function () {
  return [...this.toLowerCase()].sort().join('');
};
const isAnagram = (str1, str2) =>
  str1.kashHarCheezSortKarnaItnaEasyHota() ==
  str2.kashHarCheezSortKarnaItnaEasyHota();

module.exports = isAnagram;
