const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes : 10,
}

// cakeSlice generate cakeReducer and cakeActions
const cakeSlice = createSlice({
 name: 'cake',
 initialState, // initialState: initialState
 reducers: {
   ordered: (state, action) =>{
      state.numOfCakes -= action.payload
   },
   restored: (state, action) => {
   state.numOfCakes += action.payload
   },
 },
})

module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions