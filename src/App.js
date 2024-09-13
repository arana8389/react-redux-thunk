import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  increment,
  decrement,
  incrementAsync,
} from './features/counter/counterSlice';
import './style.css';

export default function App() {
  const count = useSelector((state) => state.counter.count);
  console.log('count', count);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="increment value "
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span>count: {count}</span>
        <br />
        <button
          aria-label="increment value "
          onClick={() => dispatch(incrementAsync(3))}
        >
          Increment Async BY 3
        </button>
        <br />
        <button
          aria-label="decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
