import React from 'react'

const ButtonBox = ({randomColors, getRandomAll}) => {
  
    const objectBgStyle ={
        backgroundColor: randomColors
      }

    return (
        <button onClick={getRandomAll} className='card__btn' style={objectBgStyle} >&#62;</button>  
    )
}

export default ButtonBox