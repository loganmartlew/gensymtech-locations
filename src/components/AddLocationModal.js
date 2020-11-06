import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'react-modal';
import { addLocation } from '../actions/locations';
import uuid from 'react-uuid';

const AddLocationModal = props => {
  const dispatch = useDispatch();

  const [location, setLocation] = useState({
    name: 'New Location',
    dimension: 0,
    portal: false,
    posO: { x: undefined, y: undefined },
    posN: { x: undefined, y: undefined },
    id: uuid(),
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
    dispatch(addLocation(location));

    setLocation({
      name: 'New Location',
      dimension: 0,
      portal: false,
      posO: { x: undefined, y: undefined },
      posN: { x: undefined, y: undefined },
      id: uuid(),
    });

    props.closeModal();
  };

  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      appElement={document.getElementById('app')}
    >
      <h2>Add Location</h2>
      <form>
        <label>
          Name:
          <input
            type='text'
            name='name'
            value={location.name}
            onChange={nameChange}
          />
        </label>
        <label>
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
        <label>
          Portal:
          <input
            type='checkbox'
            onChange={portalChange}
            checked={location.portal}
          />
        </label>
        <label>
          Overworld Coordinates: X{' '}
          <input type='number' value={location.posO.x} onChange={xChangeO} />
          Z <input type='number' value={location.posO.y} onChange={yChangeO} />
        </label>
        <label>
          Nether Coordinates: X{' '}
          <input type='number' value={location.posN.x} onChange={xChangeN} />
          Z <input type='number' value={location.posN.y} onChange={yChangeN} />
        </label>
        <button type='button' onClick={syncN}>
          Sync Nether Coordinates
        </button>
        <button type='button' onClick={syncO}>
          Sync Overworld Coordinates
        </button>
      </form>
      <button onClick={submit}>Add</button>
      <button onClick={props.closeModal}>Cancel</button>
    </Modal>
  );
};

export default AddLocationModal;
