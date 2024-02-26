const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCookies: 20,
};

const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCookies--;
    },
    restocked: (state, action) => {
      state.numOfCookies += action.payload;
    },
  },
});

module.exports = cookieSlice.reducer;
module.exports.cookieActions = cookieSlice.actions;
