import React from 'react';
import './sorting.css';
import * as SortingAlgorithms from './Algos/Sort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED = 2;

// Change this value for the number of bars (value) in the array.
const ARRAY = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisual extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.reset();
  }

  reset() {
    const array = [];
    for (let i = 0; i < ARRAY; i++) {
      array.push(randomInts(5, 510));
    }
    this.setState({ array });
  }

  mergeSort() {
    const animations = SortingAlgorithms.mergeAnimationSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const bars = document.getElementsByClassName(
        'array-bar'
      ) as HTMLCollectionOf<HTMLElement>;
      const colorChange = i % 3 !== 2;
      if (colorChange) {
        const [barOneIndex, barTwoIndex] = animations[i];
        const barOneStyle = bars[barOneIndex].style;
        const barTwoStyle = bars[barTwoIndex].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED);
      } else {
        setTimeout(() => {
          const [barOneIndex, newHeight] = animations[i];
          const barOneStyle = bars[barOneIndex].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED);
      }
    }
  }

  quickSort() {}

  heapSort() {}

  bubbleSort() {}

  selectSort() {}

  render() {
    const array = this.state;

    return (
      <section>
        <div className='nav-container'>
          <a>
            <h1>Sorting Algorithms</h1>
          </a>
          <div>
            <button onClick={() => this.reset()}>New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.selectSort()}>Selection Sort</button>
          </div>
          <a>
            <h2>PathFinding Algorithms</h2>
          </a>
        </div>
        <div className='array-container'>
          {array.array.map((value: number, index: number) => (
            <div
              className='array-bar'
              key={index}
              style={{ height: `${value}px` }}
            ></div>
          ))}
        </div>
      </section>
    );
  }
}
function randomInts(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
