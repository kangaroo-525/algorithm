/**
 * 逆波兰表达式,也叫后缀表达式,它将复杂表达式转换为可以依靠简单的操作得到计算结果的表达式
 * 例如(a+b)*(c+d)转换为ab+cd+*
 * 请编写函数calc_exp(exp)实现逆波兰表达式计算,exp的类型是数组
 */
let arr1 = ["4", "13", "5", "/", "+"]
let arr2 = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]

/**
 * 利用栈的思想
 * 1、如果遇到的是数字,将数字压入栈中
 * 2、如果遇到的是运算符号,依次弹出两次栈顶,假设第一次弹出a,第二次弹出b,
 *    进行(b运算符号a) 将两个数字的运算结果压入栈中,重复1步骤
 */

const { Stack } = require('./0-Stack')
const operationSymbols = ['+', '-', '*', '/']
function calc_exp(exp) {
  let stack = new Stack()
  for (let i = 0, len = exp.length; i < len; i++) {
    // 如果如果遇到的是数字,将数字压入栈中
    if (!operationSymbols.includes(exp[i])) {
      stack.push(exp[i])
      // 如果是运算字符, 进行计算并压入栈中
    } else {
      let a = stack.pop()
      let b = stack.pop()
      stack.push(parseInt(eval(`${b}${exp[i]}${a}`)))
    }
  }
  return stack.top()
}
console.log(calc_exp(arr1))
console.log(calc_exp(arr2))
