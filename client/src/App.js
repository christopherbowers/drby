import { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import axios from 'axios'
import GlobalStyle from './components/GlobalStyle'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import Nav from './components/Nav'
import Topic from './pages/Topic'
import { CheckSession } from './services/Auth'
import EditPost from './components/EditPost'

export default function App() {

  const location = useLocation()

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [topics, setTopics] = useState(null)

  const checkToken = async () => {
    //If a token exists, sends token to localstorage to persist logged in user
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }


  const getTopics = async () => {
    axios.get(`/api/topics/`)
    .then(res => {
      setTopics(res.data)
      setLoading(false)
    })
  }


  useEffect(() => {
    document.title = 'drby'
    getTopics()
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
    }
  }, [])

  const showNav = () => {
    if (location.pathname === '/login' || location.pathname === '/register' ) {
      return null
    } else {
     return <Nav topics={topics} />
    }
  }


  if (loading) {
    return ( <div>Loading...</div> )
  }

  return (
  <>
    <GlobalStyle />
    { showNav() }
    <Routes>
      <Route
        path="/login"
        element={
          <Login
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          /> }
      />
      {/*<Route
        path="/"
        element={<ProtectedRoute authenticated={authenticated} user={user} component={Home} />}
      />*/}
      <Route path="/" element={<Home topics={topics} />}/>
      <Route path="/topics/:topicId" element={<Topic />} />
      <Route path="/topics/:topicId/posts/:id" element={<Post />}/>
      <Route path="/createpost" element={<CreatePost user={user}/>} />
      <Route path="/register" element={<Register />} />
      <Route path="/topics/:topicId/posts/:id/edit" element={<EditPost />} />
    </Routes>

  </>
  )
}
