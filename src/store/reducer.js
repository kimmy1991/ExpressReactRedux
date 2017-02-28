const inititalState = {
  counter: 0
};

function counterApp(state = inititalState, action) {
  switch(action.type) {
    case "Add":
      return Object.assign({}, state, {counter: state.counter + 1});

    default:
      return state;
  }
}


export default counterApp;