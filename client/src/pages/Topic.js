import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

export default function Topic(props) {

  const { id } = useParams()
  const navigate = useNavigate()

  const [topic, setTopic] = useState()
  const [loading, setLoading] = useState(true)

  const getTopicPosts = () => {
    axios.get(`/api/topics/${id}`)
    .then( res => {
      setTopic(res.data)
      setLoading(false)
    })
  }

  useEffect(() => {
    getTopicPosts()
  }, [])

  console.log(topic)

  if (loading) {
    return ( <div>Loading...</div> )
  }

  return (
    <>
    <Wrapper>
      <div className="title">
        <h2></h2>
      </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  .title h2 {
    text-transform: capitalize;
  }

  color: hsla(156, 20%, 5%, 1);
`
