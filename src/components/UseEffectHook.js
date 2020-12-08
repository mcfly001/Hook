/*
 * @Descripttion: effect 
 * @Author: 豆豉
 * @Date: 2019-12-07 14:05:12
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-10-12 22:36:05
 */

import React, { useState, useEffect } from 'react'

const UseEffectHook = () => {
    const [count, setState] = useState(0);

    useEffect(() => {
        document.title = `${ count } times`;
        return () => {
            console.log(count, 111)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 增加count
    const add = () => {
        setState(count + 1)
    }

    return (
        <div>
            <span>这个是effect的hook</span>
            { count }
            <button type='button' onClick={add}>按钮</button>
        </div>
    );
};

export default UseEffectHook;