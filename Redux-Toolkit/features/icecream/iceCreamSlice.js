const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIceCream: 10,
}

const iceCreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numOfIceCream -= action.payload
        },
        restored: (state, action) => {
            state.numOfIceCream += action.payload
        },
    },
    //to let reducers affected by actions of other reducers
    /* 2 ways to add extraReducers */
    // #1
    //     extraReducers:{
    //     ['cake/ordered']: (state, action) =>{
    //         state.numOfIceCream--
    //     }
    //  },

    //#2
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIceCream--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions