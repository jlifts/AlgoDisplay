export const mergeSort: any = (array: string | any[]) => {
  if (array.length === 1) return array;
  const mid = Math.floor(array.length / 2);
  const firstHalf = mergeSort(array.slice(0, mid));
  const secondHalf = mergeSort(array.slice(mid));
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
// Fix to make more efficient in the future

export const mergeAnimationSort: any = (array: string[] | any[]) => {
  const animation: any[] = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxArray, animation);
  return animation;
};

function mergeSortHelper(
  mainArray: string[] | any[],
  startIndex: number,
  endIndex: number,
  auxArray: string[] | any[],
  animation: any[]
) {
  if (startIndex === endIndex) return;
  const middleIndex = Math.floor((startIndex + endIndex) / 2);
  mergeSortHelper(auxArray, startIndex, middleIndex, mainArray, animation);
  mergeSortHelper(auxArray, middleIndex + 1, endIndex, mainArray, animation);
  merge(mainArray, startIndex, middleIndex, endIndex, auxArray, animation);
}

function merge(
  mainArray: string[] | any[],
  startIndex: any,
  middleIndex: number,
  endIndex: number,
  auxArray: string | any[],
  animation: any[]
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;
  while (i <= middleIndex && j <= endIndex) {
    animation.push([i, j]);
    animation.push([i, j]);
    if (auxArray[i] <= auxArray[j]) {
      animation.push([k, auxArray[i]]);
      mainArray[k++] = auxArray[i++];
    } else {
      animation.push([k, auxArray[j]]);
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= middleIndex) {
    animation.push([i, i]);
    animation.push([i, i]);
    animation.push([k, auxArray[i]]);
    mainArray[k++] = auxArray[i++];
  }
  while (j <= endIndex) {
    animation.push([j, j]);
    animation.push([j, j]);
    animation.push([k, auxArray[j]]);
    mainArray[k++] = auxArray[j++];
  }
}
