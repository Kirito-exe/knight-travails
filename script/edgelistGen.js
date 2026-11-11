import { isSafeMove } from "./helpers.js";
export function edgeListGen(start) {
  let resultArr = [];
  let [x, y] = start;
  if (!isSafeMove([x, y])) throw new Error("value out of bounds of board");
  const dx = [1, 2, -1, 1, -1, -2, 2, -2];
  const dy = [2, 1, 2, -2, -2, 1, -1, -1];
  for (let i = 0; i < 8; i++) {
    const move = [x + dx[i], y + dy[i]];
    const node = [...move];
    if (isSafeMove(move)) resultArr.push(node);
  }
  return resultArr;
}
