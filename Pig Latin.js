// English to ig-Pay atin-Lay

function perLine(str) {
  var sentence = str.split(' ');
  var piggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    piggedPhrase.push(pigWord(sentence[i]));
  };
  return piggedPhrase.join(' ') + '\n';
}

function pigWord (word) {
  return word.slice(findFirstVowel(word), word.length) + '-' + word.slice( -word.length, findFirstVowel(word)) + 'ay';
}

function findFirstVowel (word) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i <= word.length - 1; i++) {

    if (vowels.indexOf(word[i]) !== -1 ) {
      return i;
    }
  }
  return word.length;
}