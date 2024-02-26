const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const cookieReducer = require("../features/cookie/cookieSlice");

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    cookie: cookieReducer,
  },
});

module.exports = store;
