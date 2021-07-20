// Selection Sort simple algorithm

export function selectSort(arr: string | any[] | any) {
  let n = arr.length;
  let i, j, min;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min = i;
    for (j = i + 1; j < n; j++) if (arr[j] < arr[min]) min = j;

    // Swap the found minimum element with the first element
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

// Animations visual and more efficient merge sort
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
