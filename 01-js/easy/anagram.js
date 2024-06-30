/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // so now here to check whether the funcntion is anagram or not we can try out here 
  // so now create an array of length 26 here 
  let arr = new Array(26);
  // so now here we have to get increase the value from the first strings value here 
  for(let i = 0; i < str1.length; i++){
    const val = str1.charCodeAt(i) - 'a'.charCodeAt(0); 
    // so now here we have to increase the value at that class here 
    arr[val]++;
  }
  // so now we have to decrease the value in the next call here 
  for(let i = 0; i < str2.length; i++){
    const val = str2.charCodeAt(i) - 'a'.charCodeAt(0); 
    // so now here we have to increase the value at that class here 
    arr[val]--;
  }
  // so now here in the array we have to check if all the value in the array is zero or not 
  for(let i = 0; i < 26; i++){
    if(arr[i] != 0){
      return false;
    }
  }
  return true;
}

module.exports = isAnagram;
