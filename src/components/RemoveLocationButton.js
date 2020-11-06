import { useDispatch } from 'react-redux';
import { removeLocation } from '../actions/locations';

const RemoveLocationButton = props => {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => {
        dispatch(removeLocation(props.id));
      }}
    >
      X
    </button>
  );
};

export default RemoveLocationButton;
