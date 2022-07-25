import React from 'react'

const QuoteBox = ({randomQuote, randomColors}) => {
  
  const objectStyle = {
    color: randomColors
  }

  return (
    <article className='card' style={objectStyle}>
        <div className='card__container'>
            <i className="fa-solid fa-quote-left"></i>
            <p className='card__quote'>{`${randomQuote.quote}`}</p>
            <p className='card__author'>{`${randomQuote.author}`}</p>
        </div>
    </article>
  )
}

export default QuoteBox