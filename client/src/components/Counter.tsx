import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { increment, decrement } from '../redux/exampleSlice';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.example.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Counter: {count}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
