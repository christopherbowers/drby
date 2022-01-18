import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'


export default function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    document.title = 'drby'
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])


  return (
  <>
    <GlobalStyle />
    <Routes>
      <Route
        path="/"
        element={
          <Login
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          /> }
      />
      {/*<Route
        path="/home"
        element={<ProtectedRoute authenticated={authenticated} user={user} component={Home} />}
      />*/}
      <Route path="/home" element={<Home />}/>
      <Route path="/register" element={<Register />} />
    </Routes>

  </>
  )
}
