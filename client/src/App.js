import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {

  useEffect(() => {
    document.title = 'drby'
  }, [])

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  return (
  <>
    <GlobalStyle />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route
        path="/"
        element={
          <Login
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          /> }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  </>
  )
}

export default App
