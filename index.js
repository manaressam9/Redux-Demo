//import redux lib and createStore API
const redux = require('redux');
const createStore = redux.createStore

//to run this file node index.js
console.log('from entry point index.js');
//define action types
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_STOCKED = 'CAKE_STOCKED'

//create an action creator that returns an action(plain Js object)
//actions only describes what happens but doesn't specify how to handle this >> reducers does

function orderCake(qty = 1) {
    return {
      type: CAKE_ORDERED,
      payload: qty
    }
  }

  function stockCake(qty =1){
    return {
        type: CAKE_STOCKED,
        payload: qty
    }
  }

//build reducer
const initialCakeState = {
    numOfCakes: 10
  }
  function cakeReducer (state = initialCakeState, action){
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state,
          numOfCakes: state.numOfCakes - 1
        }
     case CAKE_STOCKED:
        return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
      default:
        return state
    }
  }
//create Store >> takes reducer func which holds the app state
const store = createStore(cakeReducer)
//access the state useing getState()

console.log('Initial State ', store.getState())
//subscribe to store
const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
  })
  
//dispatch the action
store.dispatch(orderCake())
store.dispatch(stockCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(stockCake())
store.dispatch(stockCake())
store.dispatch(stockCake())
store.dispatch(stockCake())
//unsubscirbe

unsubscribe();
// store.dispatch(orderCake())
// console.log('Updated State ', store.getState())