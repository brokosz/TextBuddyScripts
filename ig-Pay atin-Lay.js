// igPay atinLay to English

function perLine(str) {
  var sentence = str.split(' ');
  var unpiggedPhrase = [];

  for (var i = 0; i <= sentence.length - 1; i++) {
    unpiggedPhrase.push(unpigWord(sentence[i]));
  };
  return unpiggedPhrase.join(' ') + '\n';
}

function unpigWord (piggedWord) {
  return piggedWord.slice(piggedWord.search('-') + 1, -2) + piggedWord.slice(0, piggedWord.search('-'));
}