// Bubble Sort simple algorithm
export function bubbleSort(arr: string | any[] | any) {
  let n = arr.length;
  let i, j;
  for (i = 0; i < n - 1; i++) {
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// Animations visual Bubble sort
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
