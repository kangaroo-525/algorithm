/**
 * 有一个二维数组,元素0表示这个点可以通行,元素为1,表示不可以通行,
 * 设置起始点为maze_array[2][1],终点是maze_array[3][5],
 * 请用程序计算这两个点是否相通,如果相通,请输出两点之间的最短路径(从起始点到终点经过的每一个点)
 */
let maze_array = [
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0]
]