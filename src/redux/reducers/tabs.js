const initialState = {
  tab: 1
};

function tabs(state = initialState, action = null) {
  switch (action.type) {
    case 'SET_TAB':
      return {
        ...state,
        tab: action.payload
      }
    default:
      return state;
  }
}

export default tabs;