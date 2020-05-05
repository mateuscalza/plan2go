import React, { useState } from 'react';
import TravelListScreen from './packages/travel/list/travelList.screen'
import TravelDetailsScreen from './packages/travel/create/travelDetails.screen';

function App() {
  const [route, setRoute] = useState({ name: 'travelList' })

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
    default:
      return (
        <TravelListScreen onRoute={handleRoute} />
      );
  }
}

export default App;
