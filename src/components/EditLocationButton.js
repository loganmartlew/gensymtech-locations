import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import EditLocationModal from './EditLocationModal';

const EditLocationButton = props => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal} className='editButton'>
        <AiFillEdit />
      </button>
      <EditLocationModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        location={props.location}
      />
    </div>
  );
};

export default EditLocationButton;
