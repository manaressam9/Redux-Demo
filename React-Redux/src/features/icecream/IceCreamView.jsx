import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restored } from './iceCreamSlice'

export const IceCreamView = () => {
  const numOfIceCreams = useSelector(state => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  const [numOfItem, setItems] = useState()
  return (
    <div>
      <h2>Number of iceCreams: {numOfIceCreams}</h2>
    <button onClick={() => dispatch(ordered(1))}>Order iceCream</button>
    <input type='number' value={numOfItem} onChange={e => setItems(parseInt(e.target.value))} placeholder='number of items to restock'/>
    <button onClick={() => dispatch(restored(numOfItem))}>Restock iceCreams</button>
    </div>
  )
}

