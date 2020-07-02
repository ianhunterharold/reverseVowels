var reverseVowels = function(s) {
    
  let vowelTank = [];
  let splitBy = s.split('');
  let vowels = ["a","A","e","E","i","I","o","O","u","U"];
    
    const replacedVowels = splitBy.map(char => {
      if ( vowels.includes(char) ){
        let addToVowelTank = vowelTank.unshift(char);
        return "#/#"
      } else {
        return char;
      }
    });
  
  const swappedVowel = replacedVowels.map(char => {
    if (char ==="#/#"){
      return vowelTank.shift();
    } else {
      return char;
    }
  });
    return swappedVowel.join('');
};