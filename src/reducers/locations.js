// import uuid from 'react-uuid';

// /* eslint-disable import/no-anonymous-default-export */
// const locationsReducerDefaultState = [
//   {
//     name: 'Home',
//     dimension: 1,
//     portal: true,
//     posO: { x: 0, y: 0 },
//     posN: { x: 0, y: 0 },
//     id: uuid(),
//   },
// ];

// export default (state = locationsReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_LOCATION':
//       return [...state, action.location];
//     case 'REMOVE_LOCATION':
//       return state.filter(({ id }) => id !== action.id);
//     case 'EDIT_LOCATION':
//       return state.map(location => {
//         if (location.id === action.id) {
//           return { ...location, ...action.updates };
//         } else {
//           return location;
//         }
//       });
//     default:
//       return state;
//   }
// };
