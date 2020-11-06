import RemoveLocationButton from './RemoveLocationButton';
import EditLocationButton from './EditLocationButton';
import portalImage from '../images/portal.svg';

const LocationsListItem = ({ location }) => {
  return (
    <div>
      <h3>
        {location.name}
        {location.portal ? (
          <img src={portalImage} alt='portal' height='15px' />
        ) : (
          ''
        )}
        :{' '}
      </h3>
      {location.posO.x ? (
        <p className={location.dimension > -1 ? 'activeDim' : ''}>
          {location.dimension === 1 ? 'End:' : 'Overworld:'} {location.posO.x},{' '}
          {location.posO.y}
        </p>
      ) : (
        ''
      )}
      {location.posN.x && location.dimension !== 1 ? (
        <p className={location.dimension === -1 ? 'activeDim' : ''}>
          Nether: {location.posN.x}, {location.posN.y}
        </p>
      ) : (
        ''
      )}
      <RemoveLocationButton id={location.id} />
      <EditLocationButton id={location.id} />
    </div>
  );
};

export default LocationsListItem;
