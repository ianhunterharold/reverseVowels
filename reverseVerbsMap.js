var reverseVowels = function(s) {
    
  let vowelTank = [];
  let splitBy = s.split('');
  let vowels = ["a","e","i","o","u"];

    const replacedVowels = splitBy.map(char => {
      if ( vowels.includes(char) ){
        let addToVowelTank = vowelTank.unshift(char);
        return "0"
      } else {
        return char;
      }
    });

    // [wip]
  return const reverseVowels = splitBy.map(chars => {
    let k =0;
    if (chars ==="0"){
      console.log(chars,"did it happen")
      return char = vowelTank[k]
      k++
    } else {
      return char;
    }
  })

  


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


const st='pizzahut';
reverseVowels(st);
