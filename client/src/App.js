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
import User from './pages/User'
import { CheckSession } from './services/Auth'
import EditPost from './components/EditPost'
import { BASE_URL } from './globals'
import Comment from './components/Comment'


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
    axios.get(`${BASE_URL}/topics/`)
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
    if (!authenticated) {
      return null
    } else {
     return <Nav
              topics={topics}
              authenticated={authenticated}
              toggleAuthenticated={toggleAuthenticated}
              setUser={setUser}
            />
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
    {authenticated ? (
      <>
      <Route path="/" element={<Home topics={topics} />} />
      <Route path="/topics/:topicId" element={<Topic />} />
      <Route path="/topics/:topicId/posts/:id" element={<Post />}/>
      <Route path="/createpost" element={<CreatePost user={user}/>} />
      <Route path="/topics/:topicId/posts/:id/edit" element={<EditPost />} />
      <Route path="/user" element={<User />} />
      </>
      ) : (
      <>
      <Route
        path="/"
        element={
          <Login
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          /> }
      />
      <Route path="/register" element={<Register />} />
      </>
      )}


    </Routes>

  </>
  )
}
