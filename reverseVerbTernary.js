const reverseVowels = function(s) {
    
  let vowelTank = [];
  let splitBy = s.split('');
  let vowels = ["a","A","e","E","i","I","o","O","u","U"];
  
  const replacedVowels = splitBy.map(char => {
    if ( vowels.includes(char) ){
      let addToVowelTank = vowelTank.unshift(char);
      return "####"
    } else {
      return char;
    }
  });
  
  const swappedVowel = replacedVowels.map(char => {
    return char ==="####" ?  vowelTank.shift() : char;
  });
  
    return swappedVowel.join('');
};


const st='PIZZAhut';
reverseVowels(st);
