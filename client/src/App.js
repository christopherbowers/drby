import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'
import logo from './assets/drby.svg'

function App() {

  useEffect(() => {
    document.title = 'drby'
  }, [])


  return (
  <>
    <GlobalStyle />
    <img src={logo} alt="drby" />
  </>
  )
}

export default App
