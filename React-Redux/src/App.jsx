//import { useState } from 'react'
import { UserView } from './features/user/userView'
import { CakeView } from './features/cake/cakeView'
import {IceCreamView } from './features/icecream/iceCreamView'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  return (
    <>
      <div>
        <CakeView />
        <IceCreamView />
        <UserView />
      </div>
     
    </>
  )
}

export default App
