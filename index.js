const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;

// Log initial state of redux store
console.log("Initial state: ", store.getState());

// Subscribe to store updates and log when there is an update
const unsubscribe = store.subscribe(() => {
  console.log("Updated store: ", store.getState());
});

// Actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));

// Unsubscribe to store changes
unsubscribe();
