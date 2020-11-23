/**
 * 下面的字符串中包括小括号,请编写一个函数判断字符串中的括号是否合法,所谓合法,就是括号成对出现
 * 
 */
let str = '()'
let str1 = 'sdf(ds(ew(we)rw)rwqq)qwewe'
let str2 = '(sd(qwqw)sd(sd))'
let str3 = '()()sd()(sd()fw))('

/**
 * 思路,利用栈的思想
 * 遇到左括号,压入栈中
 * 遇到右括号,判断栈是否为空,如果为空缺少左括号=>不合法,如果栈不为空,将栈顶弹出,左右括号抵消
 */

// import {Stack} from './0-Stack'
var {Stack} = require('./0-Stack')
function is_legitimate_brackets (str) {
  let stack = new Stack()
  for(let i = 0, len = str.length; i < len; i++) {
    // 如果是左括号,压入栈中
    if (str[i] === '(') {
      stack.push(str[i])
    } else if (str[i] === ')') {
      // 如果栈是空, 单个右括号
      if (stack.isEmpty()) {
        return false
      } else {
        stack.pop()
      }
    }
  }
  // 如果栈为空, 左右括号成双成对
  return stack.size() === 0
}
console.log(is_legitimate_brackets(str))
console.log(is_legitimate_brackets(str1))
console.log(is_legitimate_brackets(str2))
console.log(is_legitimate_brackets(str3))