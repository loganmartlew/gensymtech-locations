export const addLocation = location => ({
  type: 'ADD_LOCATION',
  location,
});

export const removeLocation = id => ({
  type: 'REMOVE_LOCATION',
  id,
});

export const editLocation = (id, updates) => ({
  type: 'EDIT_LOCATION',
  id,
  updates,
});
