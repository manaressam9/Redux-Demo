import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restored } from './iceCreamSlice'

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of iceCreams: {numOfIceCreams}</h2>
    <button onClick={() => dispatch(ordered(1))}>Order iceCream</button>
    <button onClick={() => dispatch(restored(1))}>Restock iceCreams</button>
    </div>
  )
}

