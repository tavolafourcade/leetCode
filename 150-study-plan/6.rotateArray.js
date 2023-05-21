/**
 * TODO: Rotate array
 * * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 */

const rotate = function(nums, k) {
  k %= nums.length
  const reverse = function(i,j){
      while(i < j){
          [nums[i], nums[j]] = [nums[j], nums[i]]
          i++
          j--
          // let temp = nums[i]
          // nums[i] = nums[j]
          // nums[j] = temp
          // i++
          // j--
      }
  }

  reverse(0, nums.length-1)
  reverse(0, k - 1)
  reverse(k, nums.length - 1)

  return nums
};


// TODO: Test case
const nums = [1,2,3,4,5,6,7]
const k = 3

const result = rotate(nums, k)

console.log(result) // [5, 6, 7, 1, 2, 3, 4]