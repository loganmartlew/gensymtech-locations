const getGroupedLocations = locations => {
  if (!locations) {
    console.log(locations);
    return;
  }
  let overworld = locations.filter(location => location.dimension === 0);
  let nether = locations.filter(location => location.dimension === -1);
  let end = locations.filter(location => location.dimension === 1);

  return {
    overworld,
    nether,
    end,
  };
};

export default getGroupedLocations;
