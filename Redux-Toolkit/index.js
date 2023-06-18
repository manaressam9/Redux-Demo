const store = require('./app/store')
const  fetchUsers  = require('./features/user/userSlice').fetchUsers
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions
console.log('initial state' , store.getState())
const unsubscribe = store.subscribe(() => {
    console.log('updated state' , store.getState())
})

// store.dispatch(cakeActions.ordered(1))
// store.dispatch(cakeActions.ordered(1))
// store.dispatch(cakeActions.ordered(1))
// store.dispatch(cakeActions.restored(1))
// store.dispatch(iceCreamActions.ordered(1))
store.dispatch(fetchUsers())

//unsubscribe()