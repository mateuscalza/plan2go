import React, { useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import { v4 as uuid } from 'uuid';
import './travelDetails.styles.css';
import Header from '../../../components/header';

export default function TravelDetailsScreen(props) {
  const [travels, setTravels] = useLocalStorage('travels', [])
  const [events] = useLocalStorage('events', [])

  const travel = useMemo(() => travels.find(travel => travel.id === props.id) || {}, [travels, props.id])
  const travelEvents = useMemo(() => events.filter(event => travel.id === event.travelId) || [], [events, travel.id])

  const handleNewEvent = () => {
    props.onRoute('eventDetails', {
      id: uuid(),
      travelId: props.id,
    })
  }

  const handleEdit = (event, id) => {
    event.preventDefault()
    props.onRoute('eventDetails', {
      id,
      travelId: props.id,
    })
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

      <h2>Eventos</h2>
      <div className="box styled">
        <div className="box content-centered">
          <button onClick={handleNewEvent}>Novo evento</button>
        </div>

        <ul className="travelDetails-events">
          {travelEvents.map(event => <li key={event.id}>{event.nome} <button onClick={event => handleEdit(event, event.id)}>✎</button></li>)}
        </ul>
      </div>
    </>
  );
}
