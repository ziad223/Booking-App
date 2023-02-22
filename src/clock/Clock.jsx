import React from 'react';
import { useState } from 'react';

const Clock = () => {
    const [clock , setClock] = useState()
   const handleClock = () =>{
    let time = new Date().toLocaleTimeString();
   setClock(time)

   }
    setInterval(handleClock , 1000)
 

  return (
    <div>
        <h2>{clock}</h2>
    </div>
  )
}

export default Clock