import * as SortingAlgorithms from '../components/Algos/Sort';

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
      const sortedArray = SortingAlgorithms.mergeSort(array);
      array = array.slice().sort((a, b) => a - b);
      expect(array).toEqual(sortedArray);
      done();
    } catch (error) {
      done(error);
    }
  }
  JSsort(array);
});
