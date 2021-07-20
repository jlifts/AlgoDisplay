import { mergeSort } from '../Algos/MergeSort';
import { quickSort } from '../Algos/QuickSort';
import { bubbleSort } from '../Algos/Bubblesort';
import { heapSort } from '../Algos/Heapsort';
import { selectSort } from '../Algos/selection';

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
  let array: any[] = [];
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
      expect(sortedArray).toEqual(array);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});

test('sorts the array, via bubble sort', (done) => {
  let array: any[] = [];
  for (let i = 0; i < 1000; i++) {
    array.push(randomInts(5, 610));
  }
  function randomInts(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function JSsort(array: any[]) {
    try {
      const sortedArray = bubbleSort(array);
      array = array.slice().sort((a, b) => a - b);
      expect(sortedArray).toEqual(array);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});

test('sorts the array, via heap sort', (done) => {
  let array: any[] = [];
  for (let i = 0; i < 1000; i++) {
    array.push(randomInts(5, 610));
  }
  function randomInts(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function JSsort(array: any[]) {
    try {
      const sortedArray = heapSort(array);
      array = array.slice().sort((a, b) => a - b);
      expect(sortedArray).toEqual(array);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});

test('sorts the array, via select sort', (done) => {
  let array: any[] = [];
  for (let i = 0; i < 1000; i++) {
    array.push(randomInts(5, 610));
  }
  function randomInts(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function JSsort(array: any[]) {
    try {
      const sortedArray = selectSort(array);
      array = array.slice().sort((a, b) => a - b);
      expect(sortedArray).toEqual(array);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});
