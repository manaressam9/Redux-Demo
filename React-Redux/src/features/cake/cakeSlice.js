import { createSlice } from '@reduxjs/toolkit'

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

export default cakeSlice.reducer
export const {ordered, restored} = cakeSlice.actions