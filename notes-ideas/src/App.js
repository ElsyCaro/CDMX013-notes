import React, { useState, useEffect } from 'react'
import db from './firebase/firebaseConfig'
import { collection, getDocs } from 'firebase/firestore'
import { Route, Routes } from 'react-router-dom'
import Login from './components/noauth/Login'
import Wall from './components/wall/Wall'
// import { async } from '@firebase/util';

function App () {
// {"mail":"elsy"}//
  useEffect(() => {
    const obetenerDatos = async () => {
      const data = await getDocs(collection(db, 'usuarios'))
      console.log(data.docs[0].data())
    }
    obetenerDatos()
  }, [])

  const [user, setUser] = useState({})
  return (
<Routes>
  {user ? <Route path="/" element={<Wall/>}/> : <Route path="/" element={<Login setUser={setUser}/>}/>
  }
  </Routes>

  )
}

export default App
