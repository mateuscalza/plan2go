import React, { useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import './travelDetails.styles.css';
import Header from '../../../components/header';

export default function TravelDetailsScreen(props) {
  const [travels, setTravels] = useLocalStorage('travels', [])
  const [events] = useLocalStorage('events', [])

  const travel = useMemo(() => travels.find(travel => travel.id === props.id) || {}, [travels, props.id])

  const handleNewTravel = event => {
    event.preventDefault()
    props.onRoute('travelDetails')
  }

  const handleBlurField = (event, field) => {
    setTravels([
      {
        ...travel,
        id: props.id,
        [field]: event.target.value,
      },
      ...travels.filter(travel => travel.id !== props.id)
    ])
  }

  return (
    <>
      <Header title='Viagem' goBack={() => props.onRoute('travelList')} />

      <form className='box styled'>
        <label>
          Nome<br />
          <input defaultValue={travel.nome || ''} onBlur={event => handleBlurField(event, 'nome')} />
        </label>

        <label>
          Início<br />
          <input defaultValue={travel.inicio || ''} type='date' onBlur={event => handleBlurField(event, 'inicio')} />
        </label>

        <label>
          Fim<br />
          <input defaultValue={travel.fim || ''} type='date' onBlur={event => handleBlurField(event, 'fim')} />
        </label>
      </form>

      {/* <button onClick={handleNewTravel}>Novo evento</button> */}

      <ul className="travelDetails-events">
        {events.map(event => <li key={event.id}>{event.nome} <button>Editar</button></li>)}
      </ul>
    </>
  );
}
