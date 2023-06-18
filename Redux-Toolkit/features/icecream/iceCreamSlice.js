const createSlice = require('@reduxjs/toolkit').createSlice

const initialState ={
    numOfIceCream: 10,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
        },
        restored: (state, action) =>{
            state.numOfIceCream += action.payload
        },
    },
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions