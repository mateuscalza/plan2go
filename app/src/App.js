import React from 'react';
import { useLocalStorage } from 'react-use';
import TravelListScreen from './packages/travel/list/travelList.screen'
import TravelDetailsScreen from './packages/travel/create/travelDetails.screen';
import EventDetailsScreen from './packages/event/create/eventDetails.screen';

function App() {
  const [route, setRoute] = useLocalStorage('route', { name: 'travelList' })

  const handleRoute = (name, params) => {
    setRoute({ name, params })
  }

  switch (route.name) {
    case 'travelList':
      return (
        <TravelListScreen onRoute={handleRoute} />
      );
    case 'travelDetails':
      return (
        <TravelDetailsScreen onRoute={handleRoute} id={route.params.id} />
      );
    case 'eventDetails':
      return (
        <EventDetailsScreen onRoute={handleRoute} id={route.params.id} travelId={route.params.travelId} />
      );
    default:
      return (
        <TravelListScreen onRoute={handleRoute} />
      );
  }
}

export default App;
