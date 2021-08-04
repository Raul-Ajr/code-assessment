function longestCommonPrefix(strs: string[]): string {
   // set a variable named prefix to an empty string
   let prefix  = "";
   // if statement to check if the array of string is equal to null data type
   // or equal to 0 return prefix variable
   if(strs == null || strs.length === 0) return prefix;
   // if not null or equal to 0 then run for loop 
   for (let i = 0; i < strs[0].length; i++){
       // loop through all characters of the very first string
       const char = strs[0][i];
       for (let j = 1; j < strs.length; j++){
           // loop through all other strings in the array
           if (strs[j][i] !== char) return prefix;
       }
       prefix = prefix + char;
   }
   return prefix;
};

// Example 1:
// Input: strs = ['flower', 'flow', 'flight'];
// Output: 'fl'
console.log(longestCommonPrefix(['flower','flow','flight']));

// Example 2:
// Input: strs = ['dog', 'racecar', 'car'];
// Output: ""
console.log(longestCommonPrefix(['dog', 'racecar', 'car']));