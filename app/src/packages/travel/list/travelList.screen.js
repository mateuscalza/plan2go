import React from 'react';
import { useLocalStorage } from 'react-use';
import { v4 as uuid } from 'uuid';
import './travelList.styles.css';
import Header from '../../../components/header';

export default function TravelListScreen({ onRoute }) {
  const [travels] = useLocalStorage('travels', [])

  const handleNewTravel = event => {
    event.preventDefault()
    onRoute('travelDetails', { id: uuid() })
  }

  const handleEdit = (event, id) => {
    event.preventDefault()
    onRoute('travelDetails', { id })
  }

  return (
    <>
      <Header title='Minhas viagens' />

      <div className='box content-centered'>
        <button onClick={handleNewTravel}>Nova viagem</button>
      </div>

      <ul className="travelList-list box styled">
        {travels.map(travel => <li key={travel.id}>{travel.nome} <button onClick={event => handleEdit(event, travel.id)}>✎</button></li>)}
      </ul>
    </>
  );
}
