// Implement the following functions

const stringLib = () => 
    {


// add a to b and return the result
function add(a, b) 
  {
    return a + b;
  }

// subtract a FROM b
function sub(a, b) {
   return b - a;
  }

  // Return a * b
function mul(a, b) {
  return a * b;
  }


  // Return A divided by B
function div(a, b) {
   return a / b; //I understand b should not be 0
  }


function Exponentiation(a, b) 
  {
  return a ** b;
  }


  // increment, a by b - which means, add B to A
function Increment(a, b) {
   return add(a,b);
  }

  
function Decrement(a,b) {
  return sub(a,b);
  }
  
function NumberListA(start,end)
    {
    let someList = []; // make an empty array
    for (let count = start; count<=end;count++) // begin the loop
      {
      someList.push(count); // add to the array, the count (which is the number in the loop)
      }
    return someList;
    }

function NumberListB(start,count, skipEvery)
    {
    let someList = []; // empty array
    let _skipCount = 0; // set this to 0 initially, we use it to keep track of when we should skip or not

    for (let aNumber = start; (aNumber <= (start + count)); aNumber++) // begin the loop
      {
      if (_skipCount == skipEvery)
        {
          someList.push(aNumber);
          _skipCount = 0;
        }
        _skipCount++;
        if (_skipCount >= skipEvery) {_skipCount = 0;}
      }
    return someList;
    }

function randomNumberBetweenRange(min, max) {  
      return Math.random() * (max - min) + min; 
  }  

function NumberListC(start,count, shouldBeRandomOrNot)
    {
    let someList = [];

    for (let aNumber = start; aNumber < (start+count); aNumber++)
      {
      if (shouldBeRandomOrNot === true)
        {
          // generate a random number, between start and end
          // https://www.w3schools.com/jsref/jsref_random.asp
          someList.push(randomNumberBetweenRange(start,(start+count)));
        }
      else
        {
          // else, we just add a regular number
          someList.push(aNumber);
        }
      }
      return someList;
    }

function IsOdd(aNumber)
    {
     // const number = 6;
     // const result = number % 2; // 2 
     return (number % 2); // will return 0 or something other than 0, if 0 is even, if more than 0 is odd
    }        

function IsEven(aNumber)
    {
    return (!IsOdd(aNumber));
    }        

function RandomNumberListA(start,end)
    {
     return NumberListC(start,end,true);
    }        

function RandomNumberListB(start,end,count, allowDuplicates)
    {
      let randomNumfromthelistB = [];
      let numberList = NumberListA(start,end)
      if (allowDuplicates === true ){
        return NumberListC(start,count,true);
      }
      for (i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * numberList.length);
        randomNumfromthelistB.push(numberList[index]);
        numberList.slice(index,1);
      }
      return randomNumfromthelistB;
    }        

    }

    console.log(numberLib());