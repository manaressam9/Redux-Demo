import { createSlice } from '@reduxjs/toolkit'
import {ordered as cakeOrdered } from '../cake/cakeSlice'

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
        builder.addCase(cakeOrdered, state => {
            state.numOfIceCream--
        })
    }
})

export default iceCreamSlice.reducer
export const {ordered, restored} = iceCreamSlice.actions