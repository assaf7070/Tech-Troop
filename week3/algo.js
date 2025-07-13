// //Brute Force

// const twoSum = function(numbers, target) {
//     for (let i=0;i<numbers.length;i++)
//         for(let j=i+1;j<numbers.length;j++)
//             if(numbers[i]+numbers[j] === target)
//                 return true;
    
//     return false;
// }



// const twoSumSort = function(numbers, target) {
//     numbers = numbers.sort( )
//     for (let i=0;i<numbers.length;i++)
        
    
//     return false;
// }

//Set
function findTwoSum(arr, target) {
  const set1 = new Set()

  for (let num of arr) {
    const temp = target - num
    if (set1.has(temp)) {
      return true;
    }
    set1.add(num)
  }

  return false;
}

const numbers = [5,7,6,9,2,4,5,14,36,15];
console.log(findTwoSum(numbers,29))
console.log(findTwoSum(numbers,80))
