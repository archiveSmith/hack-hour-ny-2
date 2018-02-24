/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 *
 * BONUS:
 * Complete in O(n) time
 *
 */

function mergeArrays(arr1, arr2) {
  let result = [];
  let indexOne = 0;
  let indexTwo = 0;
  while(indexOne < arr1.length || indexTwo < arr2.length){
    if(indexOne >= arr1.length || arr1[indexOne] > arr2[indexTwo]){
      result.push(arr2[indexTwo]);
      indexTwo++;
    }
    else if(indexTwo >= arr2.length || arr1[indexOne] <= arr2[indexTwo]){
      result.push(arr1[indexOne]);
      indexOne++;
    }
  }

  return result;
}

// var my_array = [3,4,6,10,11];
// var another_array = [1,5,8,12,14,19];
// console.log(mergeArrays(my_array, another_array));

module.exports = mergeArrays;