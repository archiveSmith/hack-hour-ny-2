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

	if (!arr1) return arr2;
	if (!arr2) return arr1;

	let merged = []

	while (arr1.length !== 0 && arr2.length !== 0){
		console.log(arr1, '  ', arr2)
		if (arr1[0] < arr2[0]){
			merged.push(arr1[0])
			arr1.shift()
		}
		else{
			merged.push(arr2[0])
			arr2.shift()
		}
	}

	if (arr1.lengths !== 0)
		return merged.concat(arr1)
	else if (arr2.lengths !== 0)
		return merged.concat(arr2)

	return merged;
}

// var my_array = [3,4,6,10,11,15,21];
// var another_array = [1,5,8,12,14,19];

// console.log(mergeArrays(my_array, another_array))

module.exports = mergeArrays;