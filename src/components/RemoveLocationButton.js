import firebase from '../firebase';
import { CgClose } from 'react-icons/cg';

const RemoveLocationButton = props => {
  return (
    <button
      className='removeButton'
      onClick={() => {
        firebase.firestore().collection('locations').doc(props.id).delete();
      }}
    >
      <CgClose />
    </button>
  );
};

export default RemoveLocationButton;
