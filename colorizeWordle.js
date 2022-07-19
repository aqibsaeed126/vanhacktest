const isPresent = (hiddenWord, guessedWord, character, matchedIndexes) => {
  for (let j=0; j<hiddenWord.length; j++) {
    
    if(matchedIndexes.indexOf(j) === -1) {
      if (character === hiddenWord[j] && guessedWord[j] !== hiddenWord[j] ) {
        matchedIndexes.push(j);
        return true;
      }
    }
  }
  
  return false;
}

const colorizeWordle = (guessedWord, hiddenWord) => {
  
  let resultString = "";
  let matchedIndexes = [];
  
  for (let i=0; i<guessedWord.length; i++) {
    if (guessedWord[i] === hiddenWord[i]) {
      resultString += 'G';
      matchedIndexes.push(i);
    } else {
        if( isPresent(hiddenWord, guessedWord, guessedWord[i], matchedIndexes) ) {
          resultString += 'Y';
        } else {
          resultString += 'B';
        }
    }
  }
  
  return resultString;
};
