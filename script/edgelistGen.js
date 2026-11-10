export function edgeListGen(start) {
  let resultArr = [];
  let [x, y] = start;
  if (!isSafeMove([x, y])) throw new Error("value out of bounds of board");
  const dx = [1, 2, -1, 1, -1, -2, 2, -2];
  const dy = [2, 1, 2, -2, -2, 1, -1, -1];
  for (let i = 0; i < 8; i++) {
    const move = [x + dx[i], y + dy[i]];
    if (isSafeMove(move)) resultArr.push(move);
  }
  return resultArr;
}
function isSafeMove([x, y]) {
  if (x >= 0 && y >= 0 && x < 8 && y < 8) return true;
  return false;
}
console.log(edgeListGen([0, 0]));
