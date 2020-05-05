import React from 'react';
import './header.css'

export default function Header({ title, goBack }) {
  const handleBack = event => {
    event.preventDefault()
    goBack()
  }
  
  return (
    <header className='header'>
      {goBack ? <button onClick={handleBack} className='icon'>{'◀︎'}</button> : <div className='icon' />}
      {title}
      <div className='icon' />
    </header>
  )
}
