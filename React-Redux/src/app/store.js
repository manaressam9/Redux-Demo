import {configureStore } from '@reduxjs/toolkit'
//const reduxLogger = require('redux-logger')
import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/iceCreamSlice'
import userReducer from '../features/user/userSlice'
//const { getDefaultMiddleware } = require('@reduxjs/toolkit')
//const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream : iceCreamReducer,
        userReducer: userReducer,
    },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export default store