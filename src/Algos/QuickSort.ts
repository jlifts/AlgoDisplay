// Quick Sort simple algorithm
const pivot = (arr: string | any[] | any, start = 0, end = arr.length + 1) => {
  const swap = (list: { [x: string]: any }, a: number, b: number) =>
    ([list[a], list[b]] = [list[b], list[a]]);

  let pivot = arr[start],
    pointer = start;

  for (let i = start; i < arr.length; i++) {
    if (arr[i] < pivot) {
      pointer++;
      swap(arr, pointer, i);
    }
  }
  swap(arr, start, pointer);

  return pointer;
};

export const quickSort = (arr: string | any[], start = 0, end = arr.length) => {
  let pivotIndex = pivot(arr, start, end);

  if (start >= end) return arr;
  quickSort(arr, start, pivotIndex);
  quickSort(arr, pivotIndex + 1, end);

  return arr;
};

// Animations visual
export const quickAnimationSort: any = (array: string[] | any[]) => {
  const animation: any[] = [];
  if (array.length <= 1) return array;
  const auxArray = array.slice();
  quickSortHelper(array, 0, array.length - 1, auxArray, animation);
  return animation;
};
// TODO:
function quickSortHelper(
  mainArray: string[] | any[],
  startIndex: number,
  endIndex: number,
  auxArray: string[] | any[],
  animation: any[]
) {
  const pivotIndex = pivot(mainArray, startIndex, endIndex);
  if (startIndex >= endIndex) return;

  quickSortHelper(auxArray, startIndex, pivotIndex, mainArray, animation);
  quickSortHelper(auxArray, pivotIndex + 1, endIndex, mainArray, animation);
  quick(mainArray, startIndex, pivotIndex, endIndex, auxArray, animation);
}
// TODO:
function quick(
  mainArray: string[] | any[],
  startIndex: any,
  pivotIndex: number,
  endIndex: number,
  auxArray: string | any[],
  animation: any[]
) {
  let k = startIndex;
  let i = startIndex;
  let j = pivotIndex + 1;
  while (i <= pivotIndex && j <= endIndex) {
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
  while (i <= pivotIndex) {
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
