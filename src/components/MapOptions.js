import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { setMode, setVisible } from '../actions/filters';

const MapOptions = () => {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const mode = state.filters.coordinateMode;
  const visible = state.filters.visibleDimensions;

  const options = [
    { label: 'Overworld', value: 'overworld' },
    { label: 'Nether', value: 'nether' },
    { label: 'End', value: 'end' },
  ];

  const modeChange = e => {
    dispatch(setMode(e.target.value));
  };

  const visibleChange = e => {
    dispatch(setVisible(e));
  };

  return (
    <div>
      <form>
        <h2>Coordinate Mode</h2>
        <label>
          Overworld
          <input
            type='radio'
            name='mode'
            value={0}
            defaultChecked={mode === 0}
            onChange={modeChange}
          />
        </label>
        <label>
          Nether
          <input
            type='radio'
            name='mode'
            value={-1}
            defaultChecked={mode === -1}
            onChange={modeChange}
          />
        </label>
      </form>
      <div>
        <h2>Visible Dimensions</h2>
        <Select
          isMulti={true}
          isSearchable={false}
          options={options}
          defaultValue={visible}
          onChange={visibleChange}
        />
      </div>
    </div>
  );
};

export default MapOptions;
