const redux = require('redux')
const createStore = redux.createStore

const initialState ={
    name: 'manar',
    address: {
        street: 'bluh',
        city: 'more bluh',
        state: 'bigger bluh',
    },
    children: [
        {id: 1, name: 'nour' , age: 1},
        {id: 2, name: 'ayoub' , age:3}
    ]
}

const STREET_UPDATED = 'STREET_UPDATED'

function updateStreet(){
    return{
        type: STREET_UPDATED,
        payload: 'new bluh',
        childage: 10,
    }
}

function dataReducer(state = initialState, action){
    switch (action.type) {
        case STREET_UPDATED:
            return{
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                },
                children: [
                    
                    ...state.children.map(child => {
                        if(child.id === 1){
                          return {
                            ...child,
                            age: action.childage}
                        }else{return child}
                    }),
                    
    
                ]
            }
    }
}

const store = createStore(dataReducer)
store.dispatch(updateStreet())

console.log(store.getState())