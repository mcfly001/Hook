/*
 * @Descripttion: useReducer
 * @Author: 豆豉
 * @Date: 2020-08-25 22:32:19
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-08-25 22:33:36
 */
import React, { useReducer } from 'react'
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}

export default Counter
