/* eslint-disable import/no-anonymous-default-export */
const filtersReducerDefaultState = {
  coordinateMode: 0,
  visibleDimensions: [
    { label: 'Overworld', value: 'overworld' },
    { label: 'Nether', value: 'nether' },
  ],
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'CHANGE_MODE':
      return { ...state, coordinateMode: action.mode };
    case 'SET_VISIBLE':
      return { ...state, visibleDimensions: action.visible };
    default:
      return state;
  }
};
