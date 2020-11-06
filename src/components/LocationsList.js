import { useSelector } from 'react-redux';
import LocationsListItem from './LocationsListItem';
import AddLocationButton from './AddLocationButton';

const LocationsList = () => {
  const state = useSelector(state => state);

  let locationsList = [];

  for (let i = 0; i < state.locations.length; i++) {
    locationsList.push(
      <LocationsListItem location={state.locations[i]} key={i} />
    );
  }

  return (
    <div>
      <h1>Locations</h1>
      {locationsList}
      <AddLocationButton />
    </div>
  );
};

export default LocationsList;
