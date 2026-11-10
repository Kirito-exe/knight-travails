import { edgeListGen } from "./edgelistGen.js";
function knightMoves(start, end) {
  if (!Array.isArray(start) || !Array.isArray(end))
    throw new TypeError("start and end are not in an array");
  const queue = [start];
  const visited = [];
  const adjList = [];
  while (queue.length !== 0) {
    const dequeue = queue.shift();
    console.log(dequeue);
    if (end[0] === dequeue[0] && end[1] === dequeue[1]) break;
    let queueToBePushed = edgeListGen(dequeue);
    for (let i of queueToBePushed) {
      if (!inclusion(i, visited)) {
        queue.push(i);
      }
    }
    visited.push(dequeue);
    adjList.push([dequeue, ...edgeListGen(dequeue)]);
    // console.log(queue)
  }
  // console.log(adjList)
  // console.log(visited)
}

function inclusion(key, checkarr) {
  const [x, y] = key;
  for (let i of checkarr) {
    if (i[0] === x && i[1] === y) return true;
  }
  return false;
}

knightMoves([0, 0], [3, 3]);
