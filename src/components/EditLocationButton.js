import React from 'react';
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
      <button onClick={openModal}>Edit Location</button>
      <EditLocationModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        id={props.id}
      />
    </div>
  );
};

export default EditLocationButton;
