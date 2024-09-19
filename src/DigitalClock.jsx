import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() =>{
        const interValId = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interValId)
            
        
    }, [])

    const formatTime = () =>{
        let hours = time.getHours()
        let minutes = time.getMinutes().toString().padStart(2, '0');
        let seconds = time.getSeconds().toString().padStart(2, '0');

        const meridien = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12 || 12

        return `${hours}:${minutes}:${seconds} ${meridien}`
    }
  return (
    <div className='clock-container'>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock