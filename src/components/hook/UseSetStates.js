/*
 * @Descripttion: 用于设置多个state
 * @Author: 豆豉
 * @Date: 2020-08-25 22:25:06
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-10-05 16:39:28
 */

import { useReducer, useCallback } from 'react'

function stateReducer(state, newState) {
    // 如果是个函数，执行函数，
    if (typeof newState === 'function') {
        newState = newState(state);
    }
  
    return { ...state, ...newState };
}

const useSetStates = (initialState, reducer = stateReducer) => {
    const [state, setState] = useReducer(reducer, initialState);
    console.log('useStates');
    const onReset = useCallback(() => {
        setState(initialState);
    }, [initialState]);
  
    return [state, setState, onReset];
};

export default useSetStates
