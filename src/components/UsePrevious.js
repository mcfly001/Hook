/*
 * @Descripttion: 用于获取上一轮的props和state
 * @Author: 豆豉
 * @Date: 2019-12-07 14:05:12
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-09-01 23:19:10
 */

import React, { useState, useEffect, useRef } from 'react';

// 获取上一次的值
const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
        ref.current = value;
    });
    
    return ref.current;
}

const UsePrevious = props => {
    const { value, onChange } = props;
    const [count, setState] = useState(0);
    const prevCountRef = usePrevious(count);
   // const prevValueRef = usePrevious(value);

    return (
        <div>
            <h1>Now: {count}, before: {prevCountRef}</h1>
            <button type='button' onClick={() => setState(count + 1)}>修改state</button>
            {/* <h1>Now: {value}, before: {prevValueRef}</h1> */}
            <button type='button' onClick={() => onChange(value + 1)}>修改props</button>
        </div>
    );
};

export default UsePrevious;