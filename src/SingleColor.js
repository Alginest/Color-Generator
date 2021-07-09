import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false)
  const background = rgb.join(',')
  const hex = rgbToHex(...rgb)

  useEffect(() => {
    let copy = setInterval(() => {
      setAlert(false)
    }, 3000)
    return () => clearInterval(copy)
  }, [alert])
  return (
    <article
      style={{ backgroundColor: `rgb(${background})` }}
      className={`color ${index > 9 && 'color-light'}`}
      onClick={() => {
        setAlert(true)
        navigator.clipboard.writeText(hex)
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
      {alert && <p className='alert'>Copied to clipboard</p>}
    </article>
  )
}

export default SingleColor
