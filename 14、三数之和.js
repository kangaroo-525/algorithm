/**
 * 给你一个包含 n 个整数的数组 nums，
 * 判断 nums 中是否存在三个元素 a，b，c ，
 * 使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 */

/**
 * 将数组进行排序,
 * 首先固定一个数, 添加两个双指针,左侧指针指向被固定的下一位,右侧指针指向末尾,双指针向中间靠拢,找出需要的两个数字
 * 在左右指针未发生碰撞时,如果当前和大于0, 移动右指针, 如果当前和小于0 移动左指针
 */

function threeSum(nums) {
  // 存放结果数组
  let res = []
  // 排序数组
  nums = nums.sort((a, b) => a - b)
  for (let i = 0, len = nums.length; i < len; i++) {
    let j = i + 1
    let k = len - 1
    // 去掉重复判断
    if (i && nums[i] === nums[i - 1]) {
      continue
    }
    while(j < k) {
      // 小于0 让和变大一点, 左指针右移
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++
        // 重复继续移动
        while(nums[j] === nums[j - 1]) {
          j++
        }
      // 大于0 让和变小一点, 右指针左移
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k--
        // 重复继续移动
        while(nums[k] === nums[k + 1]) {
          k--
        }
      } else {
        res.push([nums[i], nums[j], nums[k]])
        k--
        j++
        while(nums[j] === nums[j - 1]) {
          j++
        }
        while(nums[k] === nums[k + 1]) {
          k--
        }
      }
    }
  }
  return res
}
nums = [-1, 0, 1, 2, -1, -4]
console.log(threeSum(nums))