import { mergeSort } from '../Algos/MergeSort';
import { quickSort } from '../Algos/QuickSort';

test('sorts the array, via merge sort', (done) => {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    array.push(randomInts(5, 610));
  }
  function randomInts(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function JSsort(array: any[]) {
    try {
      const sortedArray = mergeSort(array);
      array = array.slice().sort((a, b) => a - b);
      expect(array).toEqual(sortedArray);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});

test('sorts the array, via quick sort', (done) => {
  const array = [];
  for (let i = 0; i < 1000; i++) {
    array.push(randomInts(5, 610));
  }
  function randomInts(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function JSsort(array: any[]) {
    try {
      const sortedArray = quickSort(array);
      array = array.slice().sort((a, b) => a - b);
      expect(array).toEqual(sortedArray);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});
