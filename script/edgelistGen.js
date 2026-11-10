export function edgeListGen(start, end) {
  let resultArr = [];
  let [x, y] = start;
  if (!isSafeMove([x, y])) throw new Error("value out of bounds of board");
  const dx = [1, 2, -1, 1, -1, -2, 2, -2];
  const dy = [2, 1, 2, -2, -2, 1, -1, -1];
  for (let i = 0; i < 8; i++) {
    const move = [x + dx[i], y + dy[i]];
    const node = [...move, distance(move, end)];
    if (isSafeMove(move)) resultArr.push(node);
  }
  return resultArr;
}
function isSafeMove([x, y]) {
  if (x >= 0 && y >= 0 && x < 8 && y < 8) return true;
  return false;
}
function distance(node, end) {
  return Math.sqrt(
    Math.pow(end[0] - node[0], 2) + Math.pow(end[1] - node[1], 2),
  );
}
