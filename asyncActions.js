const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    error: '',
}


const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'


function fetchReqs() {
    return {
        type: FETCH_USERS_REQUESTED,
        loading: true,
    }
}

function fetchSucces(users) {
    return {
        type: FETCH_USERS_SUCCEEDED,
        loading: false,
        payload: users,
    }
}

function fetchFail(error) {
    return {
        type: FETCH_USERS_FAILED,
        loading: false,
        payload: error,
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
              ...state,
              loading: action.loading,
            
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                // ...state,
                // loading: action.loading,
                // users: [
                //   ...state.users, 
                //   action.payload
                // ]
                loading: action.loading,
                users: action.payload,
                error: ' '
            }
        case FETCH_USERS_FAILED:
            return {
                // ...state,
                // loading: action.loading,
                // error: action.payload
                loading: action.loading,
                users:[],
                error: action.payload
            }
        default: return state
    }
}


//define async actioncreator
//thunk middleware allows action creator to return a func instead of js obj
function fetchUsers(){
    return function(dispatch){
        dispatch(fetchReqs()) //sets loading to true
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data
            dispatch(fetchSucces(users))
        }).catch(error => {
            dispatch(fetchFail(error.message))
        })

    }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())