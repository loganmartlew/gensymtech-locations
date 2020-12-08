import React, { useState } from 'react';
import Modal from 'react-modal';
import firebase from '../firebase';

const AddLocationModal = props => {
  const [location, setLocation] = useState({
    name: 'New Location',
    dimension: 0,
    portal: false,
    posO: { x: undefined, y: undefined },
    posN: { x: undefined, y: undefined },
  });

  const nameChange = e => {
    setLocation({ ...location, name: e.target.value });
  };

  const dimensionChange = e => {
    setLocation({ ...location, dimension: parseInt(e.target.value) });
  };

  const portalChange = () => {
    setLocation({
      ...location,
      portal: !location.portal,
    });
  };

  const xChangeO = e => {
    setLocation({
      ...location,
      posO: { ...location.posO, x: parseInt(e.target.value) },
    });
  };
  const yChangeO = e => {
    setLocation({
      ...location,
      posO: { ...location.posO, y: parseInt(e.target.value) },
    });
  };

  const xChangeN = e => {
    setLocation({
      ...location,
      posN: { ...location.posN, x: parseInt(e.target.value) },
    });
  };
  const yChangeN = e => {
    setLocation({
      ...location,
      posN: { ...location.posN, y: parseInt(e.target.value) },
    });
  };

  const syncN = () => {
    if (location.posO.x && location.posO.y) {
      setLocation({
        ...location,
        posN: {
          x: Math.round(location.posO.x / 8),
          y: Math.round(location.posO.y / 8),
        },
      });
    }
  };

  const syncO = () => {
    if (location.posN.x && location.posN.y) {
      setLocation({
        ...location,
        posO: {
          x: Math.round(location.posN.x * 8),
          y: Math.round(location.posN.y * 8),
        },
      });
    }
  };

  const submit = () => {
    firebase
      .firestore()
      .collection('locations')
      .add({
        name: location.name,
        dimension: location.dimension,
        portal: location.portal,
        posO: location.posO,
        posN: location.posN,
      })
      .then(() => {
        props.closeModal();
      });
  };

  return (
    <Modal
      className='locationModal'
      id='AddModal'
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      appElement={document.getElementById('app')}
    >
      <h1>Add Location</h1>
      <form>
        <label id='name'>
          Name:
          <input
            type='text'
            name='name'
            value={location.name}
            onChange={nameChange}
          />
        </label>
        <label id='dimension'>
          Dimension:
          <select
            name='dimension'
            value={location.dimension}
            onChange={dimensionChange}
          >
            <option value={0}>Overworld</option>
            <option value={-1}>Nether</option>
            <option value={1}>End</option>
          </select>
        </label>
        <label id='portal'>
          Portal:
          <input
            type='checkbox'
            onChange={portalChange}
            checked={location.portal}
          />
        </label>
        <label id='coordsO'>
          Overworld Coordinates: X{' '}
          <input type='number' value={location.posO.x} onChange={xChangeO} />
          Z <input type='number' value={location.posO.y} onChange={yChangeO} />
        </label>
        <label id='coordsN'>
          Nether Coordinates: X{' '}
          <input type='number' value={location.posN.x} onChange={xChangeN} />
          Z <input type='number' value={location.posN.y} onChange={yChangeN} />
        </label>
        <button type='button' onClick={syncN} id='syncN'>
          Sync Nether Coordinates
        </button>
        <button type='button' onClick={syncO} id='syncO'>
          Sync Overworld Coordinates
        </button>
      </form>
      <button onClick={submit}>Add</button>
      <button onClick={props.closeModal}>Cancel</button>
    </Modal>
  );
};

export default AddLocationModal;
