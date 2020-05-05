import React from 'react';

export default function Header({ title, goBack }) {
  const handleBack = event => {
    event.preventDefault()
    goBack()
  }
  
  return (
    <header className='header'>
      {goBack ? <button onClick={handleBack}>{'<'}</button> : null}
      {title}
    </header>
  )
}
