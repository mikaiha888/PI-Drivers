const initialState = {
  allDrivers: [],
  allTeams: [],
  driver: {},
  team: {},
  newDriver: {},
  newTeam: {},
  fetchError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
