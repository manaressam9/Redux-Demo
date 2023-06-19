const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes : 10,
}

// createSlic generate cakeReducer and cakeActions > cake/ordered , cake/restored
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