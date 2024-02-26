const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const cookieActions = require("./features/cookie/cookieSlice").cookieActions;

// Log initial state of redux store
console.log("Initial state: ", store.getState());

// Subscribe to store updates and log when there is an update
const unsubscribe = store.subscribe(() => {
  console.log("Updated state: ", store.getState());
});

// Actions
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(cookieActions.restocked(5));
store.dispatch(cookieActions.ordered());
store.dispatch(cookieActions.ordered());
store.dispatch(cookieActions.ordered());

// Unsubscribe to store changes
unsubscribe();
