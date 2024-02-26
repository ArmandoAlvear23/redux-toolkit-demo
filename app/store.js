const configureStore = require("@reduxjs/toolkit").configureStore;
const reduxLogger = require("redux-logger");
const cakeReducer = require("../features/cake/cakeSlice");
const cookieReducer = require("../features/cookie/cookieSlice");

//const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    cookie: cookieReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store;
