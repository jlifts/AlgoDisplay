import React from 'react';
import { NavLink } from 'react-router-dom';
import * as Merge from '../Algos/MergeSort';
import * as Quick from '../Algos/QuickSort';

// Change this value for the speed of the animations.
const ANIMATION_SPEED = 2;

// Change this value for the number of bars (value) in the array.
const ARRAY = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'var(--secondary)';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'var(--primary)';

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
    const animations = Merge.mergeAnimationSort(this.state.array);
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

  quickSort() {
    const animations = Quick.quickAnimationSort(this.state.array);
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

  heapSort() {}

  bubbleSort() {}

  selectSort() {}

  render() {
    const array = this.state;

    return (
      <section>
        <div className='nav-container'>
          <NavLink to='/' exact>
            <h1>Sorting Algorithms</h1>
          </NavLink>
          <div>
            <button onClick={() => this.reset()}>New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.selectSort()}>Selection Sort</button>
          </div>
          {/* This is coming soon */}
          <NavLink to='/comingsoon' exact>
            <h2>PathFinding Algorithms</h2>
          </NavLink>
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
