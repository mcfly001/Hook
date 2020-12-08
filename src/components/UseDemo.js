/*
 * @Descripttion: 
 * @Author: 豆豉
 * @Date: 2020-09-01 23:13:28
 * @LastEditors: 豆豉
 * @LastEditTime: 2020-10-05 16:50:42
 */
import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
  
    function handleAlertClick() {
      setTimeout(() => {
        alert('You clicked on: ' + count);
      }, 3000);
    }

    useEffect(() => {
        if(count === 2){
            console.log(document.querySelector('p').innerText);
            const a = document.querySelector('.test')
    
            a.scrollTo({
                top: 1000,
                behavior: 'smooth'
            });
        }
    }, [count])
  
    return (
      <div>
       
        <button onClick={handleAlertClick}>
          Show alert
        </button>
        <div style={{ overflow: 'auto', height: 300 }} className='test'>
            <div style={{ height: 3000}} >
                111
            </div>  
        </div>
 
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>   
      </div>
    );
  }

  export default Example