/**
Given an arbitrary ransom note string and another string containing letters from all the magazines,
write a function that will return true if the ransom note can be constructed from the magazines ;
otherwise, it will return false.
Each letter in the magazine string can only be used once in your ransom note.

You may assume that both strings contain only lowercase letters.
Ex:
canConstructRandsomNote(stringToConstruct,
magazineLetters)
canConstructRandsomNote("a", "b") -> false
canConstructRandsomNote("aa", "ab") -> false
canConstructRandsomNote("aa", "aab") -> true
 */

/**
 * sanitizeText function
 * return array of letters
 */
const sanitizeText = (textToClean) => {
  return textToClean.replace(/\s/g,'').toLowerCase().split('');
};

/**
 * Maps letters and their associated counts based on provided text source
 * @param {*} textToMap 
 * @returns Map
 */
const mapLetterToCount = (textToMap) => {
  let mapppedMap = new Map();
  if (textToMap.length > 0) {
    for (let i = 0; i < textToMap.length; i++) {
      // console.log('letter: ', textToMap[i].toLowerCase());
      // console.log('get map value: ', mapppedMap.get(textToMap[i].toLowerCase()));
      if (!mapppedMap.has(textToMap[i].toLowerCase())) {
        mapppedMap.set(textToMap[i].toLowerCase(), 1);
      } else {
        // console.log('map valueCount: ', mapppedMap.get(textToMap[i].toLowerCase()));
        let valueCount = parseInt(mapppedMap.get(textToMap[i].toLowerCase())) + 1
        mapppedMap.set(textToMap[i].toLowerCase(), valueCount);
      }
    }
  }
  return mapppedMap;
};

/**
 * Executes ransom note and checks if one can be constructed from the provided text
 * @param {*} ransomNote 
 * @param {*} textSource 
 * @returns boolean
 */
const canConstructRansomNote = (ransomNote, textSource) => {
  let canConstruct = false;
  // clean text
  const cleanRansomNote = sanitizeText(ransomNote);
  const cleanTextSource = sanitizeText(textSource);

  // console.log('cleaned: ', cleanRansomNote, cleanTextSource);
  if (cleanTextSource.length >= cleanRansomNote.length) {
    const ransomNoteMap = mapLetterToCount(cleanRansomNote);
    const textSourceMap = mapLetterToCount(cleanTextSource);
    // console.log('mapped letter counts: ', ransomNoteMap, textSourceMap);
    for (let [key, value] of ransomNoteMap.entries()) {
      key = key.toLowerCase();
      // console.log(key + " = " + value);
      if (textSourceMap.get(key) >= value) {
        canConstruct = true;
      } else {
        canConstruct = false;
      }
    }
  }
  return canConstruct;
}

module.exports = {
  sanitizeText,
  mapLetterToCount,
  canConstructRansomNote,
};

