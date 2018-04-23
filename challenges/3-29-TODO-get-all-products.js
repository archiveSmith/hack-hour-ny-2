/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

 // 3-29
 
// function getAllProducts(array) {
//   if (arr.length === 0) return [0];
//   let counter0 = 0;
//   let prod = 1;
//   let idx;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 0) {
//       idx = i;
//       counter0++;
//       if (counter0 >= 2) break;
//     } else {
//       prod *= arr[i];
//     }
//   }
//   const result = [];
//   if (counter0 >= 1) {
//     for (let i = 0; i < arr.length; i++) {
//       result.push(0);
//     }
//     if (counter0 === 1) {
//       result[idx] = prod;
//     }
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       result.push(prod / arr[i]);
//     }
//   }

//   return result;
// }

function getAllProducts(array) {
  const result = [];

  if (!array.length) {
    result.push(0);
    return result;
  }

  let total = 1;
  for (let i = 0; i < array.length; i++) {
    result.push(total);
    total *= array[i];
  }

  total = 1;
  for (let i = result.length - 1; i > -1; i--) {
    result[i] = result[i] * total;
    total *= array[i];
  }

  return result;
}

console.log(getAllProducts([1, 0, 3, 4]));

module.exports = getAllProducts;