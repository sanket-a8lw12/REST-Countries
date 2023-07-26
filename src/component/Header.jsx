import React, { useState } from 'react'

export const Header = ({ toggleStyle, myStyle }) => {
  return (
    <>
      <div className='header' style={myStyle}>
        <h2>Where in the world?</h2>
        <button className='btn btn-warning' onClick={toggleStyle}>Dark Mode</button>
      </div>
    </>
  )
}
