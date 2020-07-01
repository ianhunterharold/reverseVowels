/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    
  let vowelTank = [];
  
  for(let i=0; i <s.length; i++){
      if(s[i] === 'a' || s[i] === 'e' || s[i] === 'i'|| s[i] === 'o'|| s[i] === 'u'){
          let addToVowelTank = vowelTank.push(s[i]);
      
          let removeAndReplace = s.splice(s[i],1,0);
      }
  }
  console.log(vowelTank,"vowelTank")
  
  

  
};

//hello goes to => holle 


// leetcode goes to => leotcede 
// 
// ltcd => eeoe reverse this string, place a zero at which we plucked the vowel 
// then go back through it with a reversed input of those vowels 



