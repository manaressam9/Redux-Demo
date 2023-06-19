import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restored } from './cakeSlice'


export const CakeView = () =>{
  //hook used to access redux store's state
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  //initialize dispatch
  const dispatch = useDispatch()
    return (
    <div>
        <h2>Number of Cakes:{numOfCakes} </h2>
        <button onClick={() => dispatch(ordered(1))}>Order Cake</button>
        <button onClick={() => dispatch(restored(1))}>Restock Cakes</button>

    </div>
  )
}

