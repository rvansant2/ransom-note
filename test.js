const { sanitizeText, mapLetterToCount, canConstructRansomNote } = require('./ransomNote');

test('sanitizeText string with spaces passed in', () => {
  expect(sanitizeText('test test')).toEqual(['t', 'e', 's', 't', 't', 'e', 's', 't']);
});

test('sanitizeText string with spaces passed in', () => {
  expect(sanitizeText('t e s t')).toEqual(['t', 'e', 's', 't']);
});

test('mapLetterToCount content string with letter map counts', () => {
  let testMap = mapLetterToCount('test');
  expect(testMap.has('t')).toBe(true);
});

test('mapLetterToCount content string and check letter map counts', () => {
  let testMap = mapLetterToCount('test');
  expect(testMap.get('t')).toEqual(2);
});

test('mapLetterToCount content string and check letter map counts', () => {
  let testMap = mapLetterToCount('test');
  expect(testMap.get('e')).toEqual(1);
});

test('canConstructRansomNote empty string passed in', () => {
  expect(canConstructRansomNote('test', '')).toBe(false);
});

test('canConstructRansomNote a note and content string passed in', () => {
  expect(canConstructRansomNote('a ad e', 'aa bcde')).toBe(true);
});

test('canConstructRansomNote a note and content string passed in', () => {
  expect(canConstructRansomNote('I have It', 'ii tavehcde')).toBe(true);
});

test('canConstructRansomNote a note and content string passed in', () => {
  expect(canConstructRansomNote('I have It yo', 'ii tavehcde')).toBe(false);
});

test('canConstructRansomNote a note and passed a string of letters', () => {
  expect(canConstructRansomNote('a', 'b')).toBe(false);
});

test('canConstructRansomNote a note and passed a string of letters', () => {
  expect(canConstructRansomNote('aa', 'ab')).toBe(false);
});

test('canConstructRansomNote a note and passed a string of letters', () => {
  expect(canConstructRansomNote('aa', 'aab')).toBe(true);
});

