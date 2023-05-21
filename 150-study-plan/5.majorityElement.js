/**
  * TODO: Majority element
  **Given an array nums of size n, return the majority element.

  **The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

  // TODO: First solution
  //*create hash table
  //*iterate over the nums of the array and add them to the hash
  //*iterate over the keys of the hash
  //*find the key with the largest value
  //*return the key

  const majorityElement = function(nums) {
    const hash = {}
    let counter = 0
    let keyNumber = 0
    // for (let num of nums) {
    //     if (!hash[num]){
    //         hash[num] = 1
    //     } else {
    //         hash[num]++
    //     }
    // }
    for (let i = 0; i < nums.length; i++) {
      !hash[nums[i]] ? hash[nums[i]] = 1 : hash[nums[i]]++
  }
    
    for (let key in hash) {
        if (hash[key] > counter){
            counter = hash[key]
            keyNumber = key
        }
    }
    
    return keyNumber
};

// TODO: Test case
const nums = [2,2,1,1,1,2,2]

const result = majorityElement(nums)
console.log(result) //2