/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2019-09-14 11:30:39
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-10-12 22:38:46
 */
import React, { useState } from 'react'
import UseSteteHook from './components/UseStateHook';
import UseEffectHook from './components/UseEffectHook';
import UsePrevious from './components/UsePrevious';
import UseDemo from './components/UseDemo';

const App = () => {
    const [value, setValue] = useState(0)

    return (
        <div>
            {
                value % 2 === 0 && <UseEffectHook />
            }
            
            <UsePrevious value={value} onChange={val => setValue(val)} />
            <UseDemo />
            <UseSteteHook />
            <button onClick={() => setValue(value + 1)}>新增</button>
        </div>
    );
};

export default App;