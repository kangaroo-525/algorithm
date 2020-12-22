arr = ['a', 'b', 'c']
idx = 1
pos = 2
[arr[1], arr[2]] = [arr[2], arr[1]]

let newArr = new Array(5)
for (let i = 0; i < 5; i++) {
  newArr[i] = i
}
let index = 2
let position = 3
[newArr[index], newArr[position]] = [newArr[position], newArr[index]]