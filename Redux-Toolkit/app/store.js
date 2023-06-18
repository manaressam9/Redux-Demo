const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const iceCreamReducer = require('../features/icecream/iceCreamSlice')
const userReducer = require('../features/user/userSlice')
const { getDefaultMiddleware } = require('@reduxjs/toolkit')
const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream : iceCreamReducer,
        userReducer: userReducer,
    },
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
module.exports = store