//import redux lib and createStore API
const redux = require('redux');
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
//to run this file node index.js
console.log('from entry point index.js');
//define action types
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_STOCKED = 'CAKE_STOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_STOCKED = 'ICECREAM_STOCKED'

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

  function orderIceCream(qty =1){
    return {
      type: ICECREAM_ORDERED,
      payload: qty
    }
  }

  function stockIceCream(qty =1){
   return {
    type: ICECREAM_STOCKED,
    payload: qty
   }
  }
//build reducer
const initialState = {
    numOfCakes: 10,
    numOfIceCream: 10
  }
  function cakeReducer (state = initialState, action){
    switch (action.type) {
      case CAKE_ORDERED:
        return {
          ...state,
          numOfCakes: state.numOfCakes - action.payload
        }
     case CAKE_STOCKED:
        return {
            ...state,
            numOfCakes: state.numOfCakes + action.payload
        }
      default:
        return state
    }
  }


  function IceCreamReducer(state = initialState, action){
    switch (action.type) {
      case ICECREAM_ORDERED:
        return{
          ...state,
          numOfIceCream : state.numOfIceCream - action.payload
        }
      case ICECREAM_STOCKED:
        return{
          ...state,
          numOfIceCream : state.numOfIceCream + action.payload
        }
        default:
          return state
    }
  }

  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: IceCreamReducer
  })
//create Store >> takes reducer func which holds the app state

const store = createStore(rootReducer)
//access the state useing getState()

console.log('Initial State ', store.getState())
//subscribe to store > runs whenever the store is updated
const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
  })
  
//dispatch the action
// store.dispatch(orderCake())
// store.dispatch(stockCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(stockCake())
// store.dispatch(stockCake())
// store.dispatch(stockCake())
// store.dispatch(stockCake())

 /* Bind Action creators not important */
 const actions = bindActionCreators({orderCake,stockCake,orderIceCream,stockIceCream},store.dispatch)
 actions.orderCake();
 actions.orderCake();
 actions.stockCake();
 actions.orderIceCream();
//unsubscirbe

unsubscribe();
// store.dispatch(orderCake())
// console.log('Updated State ', store.getState())