import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './userSlice'

export const UserView = () => {
    const dispatch = useDispatch()
    //run useEffect only when the component mount
   
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const users = useSelector(state => state.userReducer)
    console.log(users.users)
  return (
    <div>
        <h2>list of users</h2>
         {users.loading && <h6>Loading...</h6>}
         {!users.loading && users.error ? <h6>Error: {users.error}</h6>: null}
         {!users.loading && users.users.length ? (
            <ul>
                {users.users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
         ) : null}
    </div>
  )
}

