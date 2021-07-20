// Heap Sort simple algorithm
// heapify
function max_heapify(a: any[], i: number, n: number) {
  let left = 2 * i; //Left child index
  let right = 2 * i + 1; //Right child index
  let maximum;
  if (right < n) {
    //Checks if right child exist
    if (a[left] >= a[right]) {
      //Compares children to find maximum
      maximum = left;
    } else {
      maximum = right;
    }
  } else if (left < n) {
    //Checks if left child exists
    maximum = left;
  } else return; //In case of no children return
  if (a[i] < a[maximum]) {
    //Checks if the largest child is greater than parent
    let swap = a[i];
    a[i] = a[maximum];
    a[maximum] = swap; //If it is then swap both
    max_heapify(a, maximum, n); //max-heapify again
  }
  return;
}

// main function to do heap sort
export function heapSort(a: string | any[] | any) {
  let n = a.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    max_heapify(a, i, n); //Building max heap
  }
  for (let i = n - 1; i >= 0; i--) {
    // swap
    let temp = a[0];
    a[0] = a[i];
    a[i] = temp;
    max_heapify(a, 0, i); //Building max heap again
  }
  return a;
}
// Inspired by Clement Mihailescu
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
