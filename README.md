# ransom-note
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false. Each letter in the magazine string can only be used once in your ransom note.

## Requirements
- nodejs v20.12.x
- npm v10.5.x

## Get Started
- Pull repo with running `git clone git@github.com:rvansant2/ransom-note.git`
- Change into directories of new repo with comman `cd randsom-note` and pull all dependency packages with running `npm install`
- Run tests by running command `npm test` to verify code executes and runs as intended.
    - Output should look like the following:
```> ransom-note@1.0.0 test
> jest

 PASS  ./test.js
  ✓ sanitizeText string with spaces passed in (2 ms)
  ✓ sanitizeText string with spaces passed in
  ✓ mapLetterToCount content string with letter map counts (1 ms)
  ✓ mapLetterToCount content string and check letter map counts
  ✓ mapLetterToCount content string and check letter map counts
  ✓ canConstructRansomNote empty string passed in
  ✓ canConstructRansomNote a note and content string passed in
  ✓ canConstructRansomNote a note and content string passed in
  ✓ canConstructRansomNote a note and content string passed in
  ✓ canConstructRansomNote a note and passed a string of letters
  ✓ canConstructRansomNote a note and passed a string of letters
  ✓ canConstructRansomNote a note and passed a string of letters (1 ms)

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        0.287 s, estimated 1 s
Ran all test suites.```
