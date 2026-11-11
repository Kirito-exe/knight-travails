import { edgeListGen } from "./edgelistGen.js";
import { isSafeMove } from "./helpers.js";
function knightMoves(start, end) {
  if (!Array.isArray(start) || !Array.isArray(end))
    throw new TypeError("start and end are not in an array");
  if (!isSafeMove(start)) throw new RangeError("start value out of bounds");
  if (!isSafeMove(end)) throw new RangeError("end value out of bounds");
  let depthcount = 0;
  const queue = [[...start, depthcount]];
  const visited = [];
  const adjList = {};
  let lastRes;
  while (queue.length !== 0) {
    const dequeue = queue.shift();
    if (end[0] === dequeue[0] && end[1] === dequeue[1]) {
      lastRes = dequeue;
      break;
    }
    let queueToBePushed = edgeListGen(dequeue);
    for (let i of queueToBePushed) {
      if (!inclusion(i, visited)) {
        queue.push([...i, dequeue]);
      }
    }
    visited.push(dequeue);
    adjList[`${dequeue}`] = edgeListGen(dequeue);
  }
  function saveParents(curr = lastRes, parents = []) {
    if (curr[2] === undefined) {
      return parents;
    }
    let [x, y] = curr;
    parents.push([x, y]);
    return saveParents(curr[2], parents);
  }
  function printParents(arr = saveParents()) {
    console.log(`You made it in ${arr.length - 1} moves. Check it out:`);
    arr.reverse();
    for (let i of arr) console.log(i);
  }
  printParents();
}

function inclusion(key, checkarr) {
  const [x, y] = key;
  for (let i of checkarr) {
    if (i[0] === x && i[1] === y) return true;
  }
  return false;
}

knightMoves([0, 0], [3, 9]);
