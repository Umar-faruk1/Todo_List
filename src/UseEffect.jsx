import React, { useEffect, useState } from 'react'


const UseEffect = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('green')


    useEffect(() => {
        document.title = `Count: ${count} - ${color}`
    }, [count, color])


    const addCount = ()=>{
        setCount(prevCount => prevCount + 1)
    }

    const subtractCount = () =>{
        setCount(prevCount => prevCount - 1)
    }

    const changeColor = () =>{
        setColor(prevColor => prevColor === 'green' ? 'red' : 'green')
    }

    
  return (
    <div className='count-container'>
        <h2 style={{color: color}}>Count: {count}</h2>
        <button onClick={()=> addCount()}>Add</button>
        <button onClick={()=> subtractCount()}>Subtract</button>
        <button onClick={()=> changeColor()}>Change Color</button>
    </div>
  )
}

export default UseEffect
