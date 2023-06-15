const redux = require('redux')
const produce = require('immer').produce
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
            return produce(state, draft => {
                draft.address.street = action.payload
                draft.children[0].age = action.childage
            })
    }
}

const store = createStore(dataReducer)
store.dispatch(updateStreet())

console.log(store.getState())