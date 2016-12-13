//PART 0
//
//Write a function that calculates the sum of all the numbers in an array

var sumOfArray = function (totalArray) {
  var numAdd = 0
  var sumSum = 0
  for (i =0; i < totalArray.length; i++){
    numAdd = totalArray[i]
    sumSum = sumSum + numAdd;
  }
    return sumSum
}

console.assert(sumOfArray([3, 4]) === 7);
console.assert(sumOfArray([]) === 0);
console.assert(sumOfArray([1, 2, 3, 4]) === 10);
console.assert(sumOfArray([10, 9, 8, 3, 4, 5, 6]) === 45);

// PART 1

// Write a function maxOfArray() that takes an array of
// numbers as an argument and finds the highest number.

var maxOfArray = function (arrMaximum) {
  var newNum = 0;
  var maxNum = null
  for (var i = 0; i < arrMaximum.length; i++){
    newNum = arrMaximum[i]
    if (newNum > maxNum){
      maxNum = newNum
    }
    else if (typeof newNum != 'number'){
      return null
    } else {}
  } return maxNum
}


console.assert(maxOfArray([2,4,3]) === 4)
console.assert(maxOfArray([10,9,8,100,7,6]) === 100)
console.assert(maxOfArray([1,8,'bucklemyshoe', 7] === null ) )

//PART 2

//Write a function isVowel() that takes a character (i.e. a string of length 1)
//and returns true if it is a vowel, false otherwise.


function isVowel(character){
    var vowel = ["a","e","i","o","u", "A","E","I","O","U"]
    var judgeVowel = false
    if (typeof character === 'string'){
      for (var i=0; i < vowel.length; i++){
        if (character.toLowerCase() === vowel[i]){
          judgeVowel = true
        }
      }
    } return judgeVowel
  }

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);


/
 Part 3

 Define a function reverse() that computes
 the reversal of a string. For example,
 reverse("skoob") should return the
 string "books".
 /
var reverse =function(str){

 var newStr = ""

 for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
   }
   return newStr;

    }

console.assert(reverse("books") === "skoob")
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew")


//
 // Part 4
 //
 // write a function the returns a FizzBuzz string for some number N (counting up from 1).
 // - for every number that isn't a multiple of 3 or 5, return a period "."
 // - for every number that is a multiple of 3 (but not 5), return "fizz"
 // - for every number that is a multiple of 5 (but not 3), return "buzz"
 // - for every number that is a multiple of 3 and 5, return "FizZBuzZ"
 ///

var fizzbuzz = function (number){
  var fizz = ""
  for (var i =1; i <= number; i++){
    if (i % 3 != 0 && i % 5 != 0){
      fizz = fizz +'.'
    }
    if (i % 3 === 0 && i % 5 != 0){
      fizz = fizz +"fizz"

    } else if (i% 5 === 0 && i % 3 != 0){
      fizz = fizz +"buzz"
    } else if (i % 3 === 0 && i % 5 === 0) {
      fizz = fizz +"FizZBuzZ"
    }

  }
  return fizz
}



console.assert(fizzbuzz(1) === ".")
console.assert(fizzbuzz(2) === "..")
console.assert(fizzbuzz(3) === "..fizz")
console.assert(fizzbuzz(5) === "..fizz.buzz")
console.assert(fizzbuzz(10) === "..fizz.buzzfizz..fizzbuzz")
console.assert(fizzbuzz(20) === "..fizz.buzzfizz..fizzbuzz.fizz..FizZBuzZ..fizz.buzz")

///
 // Part 5
 //
 // Write a function findLongestWord() that takes a string of
 //words and returns the longest word.
 // i.e. findLongestWord("a book full of dogs") should return "book"
 ///

 function findLongestWord(sent) {
     var sentSplit = sent.split(' ');
     var longestWord = 0;
     for(var i = 0; i < sentSplit.length; i++){
     if(sentSplit[i].length > longestWord)
 	longestWord = sentSplit[i].length;
 }
 }

console.assert(findLongestWord("a book full of dogs") === "book")
console.assert(findLongestWord("don't mess with Texas") === "Texas")



///
 // PART 6
 // -- ADVENTURE MODE --
 // write a function that returns the Greatest Common Denominator of two numbers
 // - if no GCD exists, return 1
 ///



console.assert(GCD(5,1) === 1)
console.assert(GCD(15,3) === 3)
console.assert(GCD(15,5) === 5)
console.assert(GCD(50,20) === 10)
