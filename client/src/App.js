import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import { BASE_URL } from './globals'
import { CheckSession } from './services/Auth'
import axios from 'axios'
import Loading from './components/Loading'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import Nav from './components/Nav'
import Topic from './pages/Topic'
import User from './pages/User'
import EditPost from './components/EditPost'
import EditComment from './components/EditComment'
import HomeTest from './pages/HomeTest'

export default function App() {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [authedUser, setAuthedUser] = useState({})
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

  const getAuthedUser = async () => {
    const id = localStorage.getItem('id')
    axios.get(`${BASE_URL}/users/${id}`)
    .then( res => {
      setAuthedUser(res.data)
    })
  }


  useEffect(() => {
    document.title = 'drby'
    getTopics()
    const token = localStorage.getItem('token')
    // Check if token exists before requesting to validate the token
    if (token) {
      checkToken()
      getAuthedUser()
    }
  }, [])


  const showNav = () => {
    if (!authenticated) {
      return null
    } else {
     return (
       <Nav
        topics={topics}
        authenticated={authenticated}
        toggleAuthenticated={toggleAuthenticated}
        setUser={setUser}
        authedUser={authedUser}
      />
     )
    }
  }


  if (loading) {
    return ( <><Loading /></> )
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
      <Route path="/topics/:topicId/posts/:id" element={<Post authedUser={authedUser}/>}/>
      <Route path="/createpost" element={<CreatePost authedUser={authedUser}/>} />
      <Route path="/topics/:topicId/posts/:id/edit" element={<EditPost />} />
      <Route path="/user" element={<User authedUser={authedUser} />} />
      <Route path="/topics/:topicId/posts/:id/:commentId/edit" element={<EditComment />} />
      </>
      ) : (
      <>
      <Route
        path="/"
        element={
          <Login
          setUser={setUser}
          toggleAuthenticated={toggleAuthenticated}
          getAuthedUser={getAuthedUser}
          /> }
      />
      <Route path="/register" element={<Register />} />
      </>
      )}


    </Routes>

  </>
  )
}
