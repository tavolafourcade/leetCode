
/**
*TODO: Merge Sorted Array

You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. 
Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/

const merge = function(nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
      nums1[i] = nums2[j]
  }
  nums1.sort((a,b) => a-b)
};


//TODO: Test Cases
const nums1 = [1,2,3,0,0,0]
const nums2 = [2,5,6]
const m = 3
const n = 3

merge(nums1, m, nums2, n)
console.log(nums1) // [ 1, 2, 2, 3, 5, 6 ]