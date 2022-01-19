import { useEffect, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'


export default function Home() {

  const [loading, setLoading] = useState(true)
  const [topics, setTopics] = useState(null)

  const getTopics = async () => {
    axios.get('/api/topics/')
    .then(res => {
      setTopics(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    document.title = 'drby'
    getTopics()
  }, [])

  if (loading) {
    return ( <div>Loading...</div> )
  }
  return (
    <>
      <Nav />
      <Wrapper>
        {
          topics.map(({id, name}) => (
            <div key={id} className="topics">
              <Link to={(`/${name}`)}>{name}</Link>
            </div>
          ))
        }
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  .topics a {
    text-decoration: none;
    color: hsla(252,51%,24%,1);
  }

  .topics {
    padding: 5px;
    width: 100%;
    margin: 10px;
    font-size: 1.5rem;
    border-bottom: 3px solid transparent;
  }

  .topics:hover {
    border-bottom: 3px solid hsla(252, 51%, 24%, 1);
  }


`
