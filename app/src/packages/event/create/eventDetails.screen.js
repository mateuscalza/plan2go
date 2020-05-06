import React, { useMemo } from 'react';
import { useLocalStorage } from 'react-use';
import './eventDetails.styles.css';
import Header from '../../../components/header';

export default function EventDetailsScreen(props) {
  const [events, setEvents] = useLocalStorage('events', [])

  const travelEvent = useMemo(() => events.find(event => event.id === props.id) || {}, [events, props.id])

  const handleBlurField = (event, field) => {
    setEvents([
      {
        ...travelEvent,
        id: props.id,
        travelId: props.travelId,
        [field]: event.target.value,
      },
      ...events.filter(event => travelEvent.id !== props.id)
    ])
  }

  return (
    <>
      <Header title='Detalhes do evento' goBack={() => props.onRoute('travelDetails', { id: props.travelId })} />

      <form className='box styled'>
        <label>
          Nome<br />
          <input defaultValue={travelEvent.nome || ''} onBlur={event => handleBlurField(event, 'nome')} />
        </label>

        <label>
          Horário<br />
          <input defaultValue={travelEvent.horario || ''} type='datetime-local' onBlur={event => handleBlurField(event, 'horario')} />
        </label>

        <label>
          Custo<br />
          <input defaultValue={travelEvent.custo || ''} type='number' step={0.10} min={0} onBlur={event => handleBlurField(event, 'custo')} />
        </label>
      </form>
    </>
  );
}
