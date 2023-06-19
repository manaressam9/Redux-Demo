import React from 'react'
import { useSelector } from 'react-redux'

export const UserView = () => {
    const users = useSelector(state => state.userReducer.users)
    console.log(users)
  return (
    <div>
        <h2>list of users</h2>
        <ul>
            {users.map(u =>(
                <li key={u.id}>{u.id}1</li>
            ))}
        </ul>
    </div>
  )
}

