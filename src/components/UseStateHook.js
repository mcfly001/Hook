/*
 * @Descripttion: state hook
 * @Author: 豆豉
 * @Date: 2019-12-07 13:47:31
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-08-25 22:21:22
 */

import React, { useState, useEffect } from 'react'

const UseStateHook = () => {
    const [count] = useState(0);

    useEffect(() => {
        document.title = `${ count } times`;
    });

    return (
        <div>
             <span>这个是effect的hook</span>
            { count }
        </div>
    );
};

export default UseStateHook;