import React from 'react'
import './App.css';


const RefChild = React.forwardRef((props,ref) => {
  return (
    <div className='inputBox'>
         <input placeholder="Type Something Here..."type="text" ref={ref}></input>
    </div>
  )
})

export default RefChild