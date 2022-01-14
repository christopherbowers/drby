import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import GlobalStyle from './components/GlobalStyle'

function App() {

  useEffect(() => {
    document.title = 'drby'
  }, [])


  return (
  <>
    <GlobalStyle />
  </>
  )
}

export default App
