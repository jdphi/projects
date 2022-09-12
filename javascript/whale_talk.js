//WHALE TALK

input = 'i am a coffee cup'//input to translate to whale talk
vowels = ['a','e','i','o','u']//sounds whales can pronounce
resultArray = []//store values from input 

//iterate through each letter of input string
for (let i=0; i<input.length; i++) {
  //console.log(input[i]) //test output
  for (let j=0; j<vowels.length; j++) {
    //console.log(vowels[j]) //test output
    //console.log(j) //test output
    if (input[i] === vowels[j]) { //compare every letter in input with each vowel in vowels
      let temp = vowels[j]; 
      if (temp === 'e') {
        temp = 'ee' //if the value is a 'e', double it as whales overpronounce 'e'
        resultArray.push(temp)
      }
      else if (temp === 'u') {
        temp = 'uu'; //if the value is a 'u', double it as whales overpronounce 'u'
        resultArray.push(temp)
      } else {
      resultArray.push(temp) //add the value of the comparison to resultArray
      }
    }
  }
}
//console.log(resultArray) //output the contents of the resultArray
let resultString = resultArray.join('').toUpperCase() //convert Array to string
console.log(resultString)