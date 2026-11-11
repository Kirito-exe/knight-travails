export function isSafeMove([x, y]) {
  if (x >= 0 && y >= 0 && x < 8 && y < 8) return true;
  return false;
}
