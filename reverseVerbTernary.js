var reverseVowels = function(s) {
    
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
    // if (char ==="####"){
    //   return vowelTank.shift();
    // } else {
    //   return char;
    // }
  });
    return swappedVowel.join('');


  // for(let i=0; i <splitBy.length; i++){
  //     if(splitBy[i] === 'a' || splitBy[i] === 'e' || splitBy[i] === 'i'|| splitBy[i] === 'o'|| splitBy[i] === 'u'){
          
  //         let addToVowelTank = vowelTank.push(splitBy[i];
  //         splitBy[i] = "0"; //replace vowel with "0"
  //     };
  // };

//   let reverseVowelTank = vowelTank.reverse();


//   for (let j =0, k=0; j < splitBy.length, k < reverseVowelTank.length; j++){
//     if (splitBy[j] === '0'){
//        splitBy[j] = reverseVowelTank[k];
//        k++
//     }
 
//   } 
// return splitBy.join('');
};


const st='PIZZAhut';
reverseVowels(st);
