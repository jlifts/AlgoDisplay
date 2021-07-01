export const Path: any = (array: string | any[]) => {
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  const firstHalf = Path(array.slice(0, mid));
  const secondHalf = Path(array.slice(mid));
  const sortedArray = [];
  let i = 0,
    j = 0;
  while (i < firstHalf.length && j < secondHalf.length) {
    if (firstHalf[i] < secondHalf[j]) {
      sortedArray.push(firstHalf[i++]);
    } else {
      sortedArray.push(secondHalf[j++]);
    }
  }
  while (i < firstHalf.length) sortedArray.push(firstHalf[i++]);
  while (j < secondHalf.length) sortedArray.push(secondHalf[j++]);
  return sortedArray;
};
