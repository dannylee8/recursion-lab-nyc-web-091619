// Code your solution here!
let myString = 'pizza';

function printString(myString) {
  console.log(myString[0])

  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString) 
  } else {
    return true
  }
}

printString(myString)