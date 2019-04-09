// Code your solution here!

function printString(myString) {
  console.log(myString[0]);

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length);
    printString(mySubString);
  } else {
    return true;
  }
}

function reverseString(myString){
  if(myString === ""){
    return "";
  } else {
    return reverseString(myString.substr(1)) + myString.charAt(0)
  }
}

function isPalindrome(string){
  if(string.length < 2) {
    return true
  } else if(string.length === 2 && string.charAt(0) === string.charAt(1)){
    return true
  } else if(string.charAt(0) === string.charAt(string.length-1)) {
    return isPalindrome(string.substr(1, string.length - 2))
  }
  else {
    return false
  }
}



function addUpTo(array, index){
  if (index === 0){
    return array[0]
  }
  else {
    return addUpTo(array, index-1) + array[index]
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  } 
  if(array[0] > array[1]){
    array.splice
  }
}

function maxOf(array){
  if(array.length === 1){
    return array[0]
  } 
  if(array[0] > array[1]){
    array.splice(1,1)
  } else {
    array.splice(0,1)
  }
  return maxOf(array)
}

function includesNumber(array, num){
  if(array.length === 0){
    return false
  } 
  if(array[0] === num){
    return true
  } else {
    array.splice(0,1)
    return includesNumber(array, num)
  }
}