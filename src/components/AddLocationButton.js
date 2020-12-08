import React from 'react';
import AddLocationModal from './AddLocationModal';

const AddLocationButton = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='AddLocationButton'>
      <button onClick={openModal}>+</button>
      <AddLocationModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </div>
  );
};

export default AddLocationButton;
