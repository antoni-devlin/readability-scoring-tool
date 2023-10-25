import { syllable } from "syllable";

// Reading ease formula
// 206.835-1.015(total words/total sentences)-84.6(total syllables/total words)

function countSentences(text) {
  const re = /[.!?]/;
  const numOfSentences = text.split(re);
  return numOfSentences.length - 1;
}

function countWords(text) {
  const re = /\s+/;
  return text.trim().split(re).length;
}

function countSyllables(text) {
  const re = /\s+/;
  let words = text.trim().split(re);
  return syllable(words);
}

function getReadingEase(text) {
  let sentences = countSentences(text);
  let words = countWords(text);
  let syllables = countSyllables(text);
  return 206.835 - 1.015 * (words / sentences) - 84.6 * (syllables / words);
}
